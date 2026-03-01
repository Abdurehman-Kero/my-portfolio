const express = require("express");
const pool = require("../config/db");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email (add to .env)
    pass: process.env.EMAIL_PASS, // Your app password (add to .env)
  },
});

router.get("/", (req, res) => {
  res.json({ message: "Contact API" });
});

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // 1. Save to MySQL database (you already have this)
    const [result] = await pool.query(
      "INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, subject, message],
    );

    // 2. Send email notification
    const mailOptions = {
      from: email, // The person who contacted you
      to: process.env.EMAIL_USER, // Your email
      subject: `Portfolio Contact: ${subject}`,
      text: `
You have a new message from your portfolio website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}

Sent on: ${new Date().toLocaleString()}
      `,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Sent on: ${new Date().toLocaleString()}</small></p>
      `,
    };

    // Send email (don't await - let it run in background)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email sending failed:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    // Return success (email sending happens in background)
    res.json({
      success: true,
      id: result.insertId,
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
