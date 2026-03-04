require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes - Clean and organized
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/banner", require("./routes/bannerRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/experiences", require("./routes/experienceRoutes"));

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
});
