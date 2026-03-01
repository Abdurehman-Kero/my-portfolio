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

// POST create new project (admin only)
router.post("/", async (req, res) => {
  const { title, description, image, link1, link2, category, featured } =
    req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO projects (title, description, image, link1, link2, category, featured) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, description, image, link1, link2, category, featured || false],
    );
    res.json({ success: true, id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update project
router.put("/:id", async (req, res) => {
  const { title, description, image, link1, link2, category, featured } =
    req.body;

  try {
    await pool.query(
      "UPDATE projects SET title=?, description=?, image=?, link1=?, link2=?, category=?, featured=? WHERE id=?",
      [
        title,
        description,
        image,
        link1,
        link2,
        category,
        featured,
        req.params.id,
      ],
    );
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE project
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM projects WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
