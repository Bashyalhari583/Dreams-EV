const express = require("express");
const { body, validationResult } = require("express-validator");
const Lead = require("../models/Lead");
const { contactLimiter, sanitize } = require("../middleware/security");
const nodemailer = require("nodemailer");

const router = express.Router();

// Email transporter (created once, reused)
let mailer = null;
if (process.env.MAIL_USER && process.env.MAIL_PASS) {
  mailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.MAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}

// Validation rules
const validateContact = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("vehicleInterest").notEmpty().withMessage("Vehicle interest is required"),
  body("message").notEmpty().withMessage("Message is required"),
];

// POST /api/contact
router.post("/", contactLimiter, validateContact, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    // Sanitize all inputs
    const data = {
      name: sanitize(req.body.name),
      email: sanitize(req.body.email),
      phone: sanitize(req.body.phone),
      vehicleInterest: sanitize(req.body.vehicleInterest),
      message: sanitize(req.body.message),
    };

    // Save to MySQL
    await Lead.create(data);

    // Send email notification (non-blocking, don't fail the request)
    if (mailer && process.env.ADMIN_EMAIL) {
      mailer
        .sendMail({
          from: process.env.MAIL_USER,
          to: process.env.ADMIN_EMAIL,
          subject: `New Inquiry - ${data.vehicleInterest}`,
          text: [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Vehicle Interest: ${data.vehicleInterest}`,
            `\nMessage:\n${data.message}`,
          ].join("\n"),
        })
        .catch((err) => console.error("Email send failed:", err.message));
    }

    res.json({ message: "Thanks! Your inquiry has been sent successfully." });
  } catch (err) {
    console.error("Contact submission error:", err.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

module.exports = router;
