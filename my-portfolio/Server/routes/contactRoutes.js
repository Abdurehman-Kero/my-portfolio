const express = require("express");
const pool = require("../config/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Contact API" });
});

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, subject, message],
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
