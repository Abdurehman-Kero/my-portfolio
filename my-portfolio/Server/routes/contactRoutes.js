const express = require("express");
const pool = require("../config/db");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.get("/", (req, res) => {
  res.json({ message: "Contact API" });
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save to MySQL database
    const [result] = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message],
    );

    // 2. Send email notification
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email in background
    transporter.sendMail(mailOptions, (error) => {
      if (error) console.error("Email failed:", error);
    });

    res.json({
      success: true,
      id: result.insertId,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
