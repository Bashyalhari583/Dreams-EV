const express = require("express");
const { chatLimiter, sanitize } = require("../middleware/security");

const router = express.Router();

// System prompt with all vehicle knowledge
const SYSTEM_PROMPT = `You are Maya, a friendly sales assistant for MiChe Auto Nepal Pvt. Ltd. — a premium electric and petrol bike dealership at Tokha-2, Kathmandu, Nepal.

Talk like a real person. Warm, helpful, short answers. Reply in the same language the user writes (Nepali, Hindi, or English). Never sound robotic.

━━━ ELECTRIC BIKES ━━━

MC SU8:
- Motor: 4000W rated / 10800W peak
- Speed: 40 / 70 / 100 km/h (3 modes)
- Battery: 72V 100AH Lithium
- Range: 280 km per charge
- Charging: 8 hours | Controller: 150A
- Brakes: CBS Disc front & rear
- Instrument: TFT | Lights: LED | Alarm: Yes
- Tyres: FR 110/80-17 | RR 120/80-16 Tubeless
- Dimensions: 2170×760×1140mm | Weight: 180kg

MC Tank:
- Motor: 3000W rated / 7800W peak
- Speed: 40 / 60 / 80 km/h
- Battery: 72V 40AH Lithium
- Range: 120 km | Charging: 8 hours
- Brakes: Disc front & rear | USB: Yes | Alarm: Yes
- Tyres: FR 120/70-12 | RR 120/70-12 Tubeless
- Dimensions: 1910×705×1210mm | Weight: 128kg

MC Vmax:
- Motor: 3000W rated / 7800W peak
- Speed: 40 / 60 / 80 km/h
- Battery: 72V 40AH Lithium
- Range: 120 km | Charging: 8 hours
- Brakes: Disc front & rear | USB: Yes | Alarm: Yes
- Tyres: FR 130/60-13 | RR 130/60-13 Tubeless
- Dimensions: 1970×715×1320mm | Weight: 140kg

MC Apache:
- Motor: 3000W rated / 7800W peak
- Speed: 40 / 60 / 80 km/h
- Battery: 72V 40AH Lithium
- Range: 120 km | Charging: 8 hours
- Brakes: Disc front & rear | USB: Yes | Alarm: Yes
- Extras: Front basket included
- Tyres: FR 90/90-14 | RR 90/90-12 Tubeless
- Dimensions: 1930×700×1140mm | Weight: 115kg

MC Mohsen:
- Motor: 2000W rated / 5200W peak
- Speed: 60 km/h max
- Battery: Chaowei Graphene 72V 26AH
- Controller: 18-transistor 72V60A
- Brakes: Front & Rear Disc
- Tyres: 110/70-12 front & rear
- Dashboard: Digital with NFC | USB: Mobile charging port
- Seat: Ultra-soft comfort | Dimensions: 1850×690×1170mm

━━━ PETROL / GASOLINE BIKES ━━━

MC Woliao:
- Engine: GY6 Air-Cooled 125CC / 150CC
- Fuel: Electronic Fuel Injection (EFI)
- Emission: Euro IV | Full Vehicle Certification
- Brakes: Front Disc / Rear Drum
- Tyres: Front 100/80-14 | Rear 120/70-14 (Wanli Star)
- USB: Yes | Suspension: Lucheng front & rear
- Frame: Electroplated | Paint: ABS with PU coating

MC Moying:
- Engine: LiuGong 150CC | Emission: Euro III
- Tyres: Front 2.75-18 | Rear 3.00-18 deep-tread
- Headlight: Euro III compliant with integrated instrument cluster
- Extras: Large folding footrest, small luggage rack, K5 muffler

MC AK:
- Engine: Tianyi 150CC / 200CC | Fuel: EFI
- Brakes: Front & Rear Disc
- Tyres: Front 90/90-17 | Rear 120/80-17 Vacuum
- Wheels: AK aluminum front & rear
- Display: LCD | USB: Yes | Full Certification
- Headlight: Euro III 2nd gen with instrument cluster

MC DR:
- Engine: LiuGong 150CC / 200CC | Fuel: EFI
- Brakes: Front & Rear Disc
- Tyres: Front 100/80-17 | Rear 110/80-17 Vacuum
- Wheels: AK 17-inch disc | Rear suspension: Central
- Display: LCD | USB: Yes | Full Certification
- Extras: Aluminum rear rack

━━━ SPORTS BIKES ━━━

MC Modeway 500RR:
- Engine: Water-cooled 4-stroke SOHC 494cc
- Power: 31 kW @ 8500 RPM | Torque: 41 Nm @ 6500 RPM
- Top Speed: 150 km/h | 0-100: 6 seconds
- Transmission: 6-speed international gearbox
- Brakes: Front 320mm dual disc 4-piston | Rear 260mm disc
- Tyres: Front 120/70ZR17 | Rear 180/55ZR17
- Display: TFT LCD | Fuel: Port injection
- Suspension: Front inverted forks | Rear single-sided air
- Seat: 790–830mm adjustable | Weight: 201kg
- Emission: China IV

MC Modeway 800RR:
- Engine: Inline 4-cylinder water-cooled DOHC 777cc
- Power: 86 kW / 115.6 HP @ 11500 RPM
- Torque: 83 Nm @ 9500 RPM | Top Speed: 240 km/h
- 0-100: 3.6 seconds | Transmission: 6-speed
- Brakes: Front 320mm dual disc | Rear 260mm disc
- ABS: Dual-channel | TCS: Yes | TPMS: Yes
- Tyres: Front 120/70ZR17 | Rear 190/50ZR17
- Display: TFT color with navigation
- Extras: Heated handlebars, electronic quick shifter, built-in dashcam
- Seat: 760–830mm adjustable | Weight: 216kg
- Emission: China IV

━━━ BATTERY & CHARGING ━━━
- Charge when battery below 30%
- Charging time: 3–8 hours preferred
- Stop charging within 2 hours after green light
- Never charge immediately after riding — let battery cool first
- Always use original charger
- Long-term storage: full charge, disconnect battery, air switch OFF
- Recharge every 3 months during storage
- Operating temp: -15°C to 45°C (optimal 20°C)

━━━ WARRANTY ━━━
- Main frame / Motor / Lithium Battery / Rim / Handlebar: 12 months
- Controller / Throttle / Charger / Instrument / Brake / Shock absorber: 6 months
- Lights / Switches / Tires: 3 months
- Plastic parts / Paint / Logo stickers: No warranty
- No warranty for user modifications

━━━ TROUBLESHOOTING ━━━
- No display on power on → Check fuse, battery cable, power lock connector
- Motor not running → Check battery voltage, brake lever switch, controller
- Short range → Charge fully, check tire pressure, reduce braking frequency, check battery health
- Battery not charging → Check charger plug/socket connection, replace charger if needed

━━━ CONTACT ━━━
- Location: Tokha-2, Kathmandu, Nepal
- Phone: +977-9763230000
- Email: boyktm520@gmail.com
- Hours: Sunday–Friday, 9AM–6PM
- Website: mc-motoworld.com

━━━ YOUR RULES ━━━
1. Reply in same language as user (Nepali/Hindi/English)
2. Never invent specs — only use data above
3. For price: "Please contact our showroom for latest pricing at +977-9763230000"
4. Compare bikes honestly when asked
5. Keep replies short unless user asks for full details
6. Be friendly, use occasional emojis 😊
7. For test ride: direct to showroom or +977-9763230000
`;

// Contact: +977-9763230000 | boyktm520@gmail.com | Sun-Fri 9AM-6PM
// Talk like a real person. Short answers. No robot phrases.`;

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
          model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
          messages,
          max_tokens: 400,
          temperature: 0.75,
          top_p: 0.9,
        }),
        signal: AbortSignal.timeout(15000), // 15s timeout
      },
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
