const express = require("express");
const pool = require("../config/db");
const router = express.Router();

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const [testimonials] = await pool.query(
      "SELECT * FROM testimonials ORDER BY created_at DESC",
    );
    res.json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET single testimonial
router.get("/:id", async (req, res) => {
  try {
    const [testimonial] = await pool.query(
      "SELECT * FROM testimonials WHERE id = ?",
      [req.params.id],
    );
    res.json(testimonial[0]);
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST create new testimonial
router.post("/", async (req, res) => {
  const { name, position, company, testimonial, image, rating, featured } =
    req.body;

  // Validate required fields
  if (!name || !position || !company || !testimonial) {
    return res.status(400).json({
      success: false,
      error: "Name, position, company, and testimonial are required",
    });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO testimonials (name, position, company, testimonial, image, rating, featured) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        position,
        company,
        testimonial,
        image || null,
        rating || 5,
        featured || true,
      ],
    );

    res.json({
      success: true,
      id: result.insertId,
      message: "Testimonial added successfully",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update testimonial
router.put("/:id", async (req, res) => {
  const { name, position, company, testimonial, image, rating, featured } =
    req.body;
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      "UPDATE testimonials SET name=?, position=?, company=?, testimonial=?, image=?, rating=?, featured=? WHERE id=?",
      [name, position, company, testimonial, image, rating, featured, id],
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Testimonial not found" });
    }

    res.json({ success: true, message: "Testimonial updated successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE testimonial
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query("DELETE FROM testimonials WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Testimonial not found" });
    }

    res.json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
