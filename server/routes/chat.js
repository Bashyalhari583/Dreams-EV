const express = require("express");
const { chatLimiter, sanitize } = require("../middleware/security");

const router = express.Router();

// System prompt with all vehicle knowledge
const SYSTEM_PROMPT = `You are MiChe AI, a friendly assistant for MiChe Auto Nepal Pvt. Ltd. — a premium EV and petrol bike/scooter dealer at Tokha-2, Kathmandu, Nepal.

Help with: vehicle info, pricing, EMI, test rides, battery/charging, comparisons.

Vehicles:
EV Bikes:
- Thunder EV: NPR 4,50,000 | 150km range | 110km/h | 3hr charge | EMI 12,900/mo
- Nova RX: NPR 3,95,000 | 130km | 95km/h | 3.5hr | EMI 11,400/mo
- Aero X: NPR 5,20,000 | 180km | 120km/h | 3hr | EMI 14,800/mo

EV Scooters:
- City Spark: NPR 2,20,000 | 110km | 75km/h | 4hr | EMI 6,800/mo
- Metro Glide: NPR 2,65,000 | 125km | 82km/h | 3.8hr | EMI 7,900/mo
- Elegance E: NPR 3,10,000 | 140km | 88km/h | 3.2hr | EMI 9,200/mo

Petrol Bikes:
- Storm 250: NPR 3,35,000 | 250cc | 42km/l | EMI 9,900/mo
- Titan 400: NPR 5,75,000 | 400cc | 35km/l | EMI 16,400/mo
- Rider 150: NPR 2,45,000 | 150cc | 48km/l | EMI 7,300/mo

Petrol Scooters:
- Swift 125: NPR 2,15,000 | 125cc | 52km/l | EMI 6,500/mo
- Royal 150: NPR 2,70,000 | 150cc | 45km/l | EMI 8,100/mo
- Urban 110: NPR 1,85,000 | 110cc | 58km/l | EMI 5,700/mo

Contact: +977-9763230000 | boyktm520@gmail.com | Sun-Fri 9AM-6PM
Talk like a real person. Short answers. No robot phrases.`;

// POST /api/chat
router.post("/", chatLimiter, async (req, res) => {
  const userMessage = sanitize(req.body.message || "");
  const history = Array.isArray(req.body.history)
    ? req.body.history.slice(-10)
    : [];

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  // If no API key, use simple fallback replies
  if (!process.env.DEEPINFRA_API_KEY) {
    return res.json({ reply: fallbackReply(userMessage) });
  }

  try {
    // Build messages array
    const messages = [{ role: "system", content: SYSTEM_PROMPT }];

    for (const msg of history) {
      if (msg.role === "user" || msg.role === "assistant") {
        messages.push({
          role: msg.role,
          content: sanitize(String(msg.content || "")),
        });
      }
    }

    messages.push({ role: "user", content: userMessage });

    // Call DeepInfra API
    const response = await fetch(
      "https://api.deepinfra.com/v1/openai/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DEEPINFRA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistralai/Mistral-7B-Instruct-v0.3",
          messages,
          max_tokens: 300,
          temperature: 0.85,
          top_p: 0.9,
        }),
        signal: AbortSignal.timeout(15000), // 15s timeout
      }
    );

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      throw new Error(errBody?.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Hmm, something went wrong. Try again?";

    res.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err.message);
    // Return fallback instead of crashing
    res.json({ reply: fallbackReply(userMessage) });
  }
});

// Simple keyword fallback when AI is unavailable
function fallbackReply(message) {
  const msg = message.toLowerCase();
  if (msg.includes("ev") || msg.includes("electric")) {
    return "We have 3 EV bikes (Thunder EV, Nova RX, Aero X) and 3 EV scooters (City Spark, Metro Glide, Elegance E). Prices start from NPR 2,20,000. Want details on any?";
  }
  if (msg.includes("petrol") || msg.includes("sports")) {
    return "Our petrol range includes Storm 250, Titan 400, Rider 150, Swift 125, Royal 150, and Urban 110. What are you looking for?";
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("emi")) {
    return "Prices range from NPR 1,85,000 to NPR 5,75,000 with EMI options available. Ask about a specific model!";
  }
  if (msg.includes("test") || msg.includes("ride")) {
    return "Book a test ride through our contact form or call +977-9763230000. We're at Tokha-2, Kathmandu.";
  }
  return "I can help with EV models, petrol bikes, prices, EMI, and test rides. What would you like to know?";
}

module.exports = router;
