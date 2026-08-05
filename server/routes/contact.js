const express = require("express");
const { body, validationResult } = require("express-validator");
const Lead = require("../models/Lead");
const { contactLimiter, sanitize } = require("../middleware/security");
const nodemailer = require("nodemailer");

const router = express.Router();

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

const validateContact = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("vehicleInterest")
    .notEmpty()
    .withMessage("Vehicle interest is required"),
  body("message").notEmpty().withMessage("Message is required"),
];

router.post("/", contactLimiter, validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const data = {
      name: sanitize(req.body.name),
      email: sanitize(req.body.email),
      phone: sanitize(req.body.phone),
      vehicleInterest: sanitize(req.body.vehicleInterest),
      message: sanitize(req.body.message),
    };

    await Lead.create(data);

    if (mailer && process.env.ADMIN_EMAIL) {
      mailer
        .sendMail({
          from: `"MiChe Auto Nepal" <${process.env.MAIL_USER}>`,
          to: process.env.ADMIN_EMAIL,
          replyTo: data.email,
          subject: `New Inquiry — ${data.vehicleInterest} | ${data.name}`,
          html: `
            <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#f9f9f9;border-radius:8px;overflow:hidden">
              <div style="background:#020304;padding:20px 24px">
                <span style="color:#19d7ff;font-weight:800;font-size:16px;letter-spacing:.05em">MICHE AUTO NEPAL — New Inquiry</span>
              </div>
              <div style="padding:24px">
                <table style="width:100%;border-collapse:collapse">
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;color:#666;width:140px">Name</td>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Email</td>
                    <td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${data.email}">${data.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Phone</td>
                    <td style="padding:8px 0;border-bottom:1px solid #eee"><a href="tel:${data.phone}">${data.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;color:#666">Interest</td>
                    <td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:700;color:#f97316">${data.vehicleInterest}</td>
                  </tr>
                </table>
                <div style="margin-top:16px;padding:14px;background:#fff;border-radius:6px;border:1px solid #eee">
                  <p style="margin:0 0 6px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.06em">Message</p>
                  <p style="margin:0;color:#333;line-height:1.6">${data.message}</p>
                </div>
                <p style="margin-top:16px;font-size:12px;color:#999">
                  Reply directly to this email to respond to ${data.name}.
                </p>
              </div>
            </div>
          `,
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

// const express = require("express");
// const { body, validationResult } = require("express-validator");
// const Lead = require("../models/Lead");
// const { contactLimiter, sanitize } = require("../middleware/security");
// const nodemailer = require("nodemailer");

// const router = express.Router();

// // Email transporter (created once, reused)
// let mailer = null;
// if (process.env.MAIL_USER && process.env.MAIL_PASS) {
//   mailer = nodemailer.createTransport({
//     host: process.env.MAIL_HOST || "smtp.gmail.com",
//     port: Number(process.env.MAIL_PORT) || 587,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });
// }

// // Validation rules
// const validateContact = [
//   body("name").notEmpty().withMessage("Name is required"),
//   body("email").isEmail().withMessage("Valid email is required"),
//   body("phone").notEmpty().withMessage("Phone is required"),
//   body("vehicleInterest").notEmpty().withMessage("Vehicle interest is required"),
//   body("message").notEmpty().withMessage("Message is required"),
// ];

// // POST /api/contact
// router.post("/", contactLimiter, validateContact, async (req, res) => {
//   // Check validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ error: errors.array()[0].msg });
//   }

//   try {
//     // Sanitize all inputs
//     const data = {
//       name: sanitize(req.body.name),
//       email: sanitize(req.body.email),
//       phone: sanitize(req.body.phone),
//       vehicleInterest: sanitize(req.body.vehicleInterest),
//       message: sanitize(req.body.message),
//     };

//     // Save to MySQL
//     await Lead.create(data);

//     // Send email notification (non-blocking, don't fail the request)
//     if (mailer && process.env.ADMIN_EMAIL) {
//       mailer
//         .sendMail({
//           from: process.env.MAIL_USER,
//           to: process.env.ADMIN_EMAIL,
//           subject: `New Inquiry - ${data.vehicleInterest}`,
//           text: [
//             `Name: ${data.name}`,
//             `Email: ${data.email}`,
//             `Phone: ${data.phone}`,
//             `Vehicle Interest: ${data.vehicleInterest}`,
//             `\nMessage:\n${data.message}`,
//           ].join("\n"),
//         })
//         .catch((err) => console.error("Email send failed:", err.message));
//     }

//     res.json({ message: "Thanks! Your inquiry has been sent successfully." });
//   } catch (err) {
//     console.error("Contact submission error:", err.message);
//     res.status(500).json({ error: "Server error. Please try again." });
//   }
// });

// module.exports = router;
