require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes")); // Add this line

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/experiences", require("./routes/experienceRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
});
