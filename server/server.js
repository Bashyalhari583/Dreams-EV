require("dotenv").config({ path: "../.env" });

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const path = require("path");
const { initDatabase } = require("./config/db");
const { apiLimiter } = require("./middleware/security");
const contactRoutes = require("./routes/contact");
const chatRoutes = require("./routes/chat");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security Middleware ─────────────────────────────────────────────────────
app.use(helmet()); // Sets security HTTP headers
app.use(hpp()); // Prevents HTTP parameter pollution
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "10kb" })); // Parse JSON, cap body size
app.use("/api", apiLimiter); // Rate limit all /api routes

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);

// ─── Health Check ────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Serve React Build in Production ─────────────────────────────────────────
if (process.env.NODE_ENV === "production") {
  const clientBuild = path.join(__dirname, "../client/dist");
  app.use(express.static(clientBuild));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuild, "index.html"));
  });
}

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ error: "Server error. Please try again." });
});

// ─── Start Server ────────────────────────────────────────────────────────────
async function start() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(
      `  DeepInfra AI: ${process.env.DEEPINFRA_API_KEY ? "configured" : "not set (fallback mode)"}`
    );
    console.log(
      `  Email: ${process.env.MAIL_USER ? "configured" : "not set"}`
    );
  });
}

start();
