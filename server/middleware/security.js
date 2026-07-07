const rateLimit = require("express-rate-limit");

// General API rate limiter: 100 requests per 15 min per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests. Try again in a few minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter limiter for chat: 30 requests per 5 min per IP
const chatLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 30,
  message: { error: "Chat rate limit reached. Try again shortly." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Stricter limiter for contact form: 5 submissions per 15 min per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many submissions. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Strip dangerous characters from string inputs
function sanitize(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "") // strip HTML angle brackets
    .trim()
    .slice(0, 2000); // cap length to prevent abuse
}

module.exports = { apiLimiter, chatLimiter, contactLimiter, sanitize };
