const express = require("express");
const pool = require("../config/db");
const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const [projects] = await pool.query(
      "SELECT * FROM projects ORDER BY created_at DESC",
    );
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET single project
router.get("/:id", async (req, res) => {
  try {
    const [project] = await pool.query("SELECT * FROM projects WHERE id = ?", [
      req.params.id,
    ]);
    res.json(project[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new project
router.post("/", async (req, res) => {
  const {
    title,
    description,
    technologies,
    github_url,
    live_url,
    image_url,
    featured,
  } = req.body;

  // Validate required fields
  if (!title || !description || !github_url || !live_url || !image_url) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields. Please fill all fields.",
    });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO projects 
       (title, description, technologies, github_url, live_url, image_url, featured) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description,
        technologies || null,
        github_url,
        live_url,
        image_url,
        featured ? 1 : 0,
      ],
    );

    res.json({
      success: true,
      id: result.insertId,
      message: "Project added successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT update project
router.put("/:id", async (req, res) => {
  const {
    title,
    description,
    technologies,
    github_url,
    live_url,
    image_url,
    featured,
  } = req.body;
  const { id } = req.params;

  try {
    const [result] = await pool.query(
      `UPDATE projects 
       SET title = ?, description = ?, technologies = ?, github_url = ?, live_url = ?, image_url = ?, featured = ? 
       WHERE id = ?`,
      [
        title,
        description,
        technologies || null,
        github_url,
        live_url,
        image_url,
        featured ? 1 : 0,
        id,
      ],
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    res.json({ success: true, message: "Project updated successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query("DELETE FROM projects WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
