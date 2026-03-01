const express = require("express");
const router = express.Router();

// Simple admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Use environment variables
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, error: "Invalid credentials" });
  }
});

module.exports = router;
