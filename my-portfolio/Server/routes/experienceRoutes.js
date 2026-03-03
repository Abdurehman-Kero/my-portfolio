const express = require("express");
const pool = require("../config/db");
const router = express.Router();

// GET all experiences
router.get("/", async (req, res) => {
  try {
    const [experiences] = await pool.query(
      "SELECT * FROM experiences ORDER BY displayOrder ASC, created_at DESC",
    );
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new experience
router.post("/", async (req, res) => {
  const {
    year,
    quarter,
    title,
    company,
    description,
    technologies,
    achievements,
    companyLogo,
    currentPosition,
    displayOrder,
  } = req.body;

  if (!year || !title || !description) {
    return res
      .status(400)
      .json({
        success: false,
        error: "Year, title, and description are required",
      });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO experiences (year, quarter, title, company, description, technologies, achievements, companyLogo, currentPosition, displayOrder) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        year,
        quarter,
        title,
        company,
        description,
        technologies,
        achievements,
        companyLogo,
        currentPosition || false,
        displayOrder || 0,
      ],
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update experience
router.put("/:id", async (req, res) => {
  const {
    year,
    quarter,
    title,
    company,
    description,
    technologies,
    achievements,
    companyLogo,
    currentPosition,
    displayOrder,
  } = req.body;
  const { id } = req.params;

  try {
    await pool.query(
      `UPDATE experiences SET year=?, quarter=?, title=?, company=?, description=?, technologies=?, achievements=?, companyLogo=?, currentPosition=?, displayOrder=? WHERE id=?`,
      [
        year,
        quarter,
        title,
        company,
        description,
        technologies,
        achievements,
        companyLogo,
        currentPosition,
        displayOrder,
        id,
      ],
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE experience
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM experiences WHERE id = ?", [id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
