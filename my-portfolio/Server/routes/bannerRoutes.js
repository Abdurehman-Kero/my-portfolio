const express = require("express");
const pool = require("../config/db");
const router = express.Router();

// GET active banner image
router.get("/active", async (req, res) => {
  try {
    const [banners] = await pool.query(
      "SELECT * FROM banner_images WHERE is_active = true ORDER BY id DESC LIMIT 1",
    );
    res.json(banners[0] || { image_url: "/assets/images/bannerImg.jpg" });
  } catch (error) {
    console.error("Error fetching banner:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET all banner images (for admin)
router.get("/", async (req, res) => {
  try {
    const [banners] = await pool.query(
      "SELECT * FROM banner_images ORDER BY updated_at DESC",
    );
    res.json(banners);
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST upload new banner image
router.post("/", async (req, res) => {
  const { image_url, alt_text } = req.body;

  if (!image_url) {
    return res
      .status(400)
      .json({ success: false, error: "Image URL is required" });
  }

  try {
    // Optionally deactivate previous banners
    await pool.query("UPDATE banner_images SET is_active = false");

    // Insert new banner
    const [result] = await pool.query(
      "INSERT INTO banner_images (image_url, alt_text, is_active) VALUES (?, ?, true)",
      [image_url, alt_text || "Banner Image"],
    );

    res.json({
      success: true,
      id: result.insertId,
      message: "Banner image updated successfully",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE banner image
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM banner_images WHERE id = ?", [id]);
    res.json({ success: true, message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
