import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BsGithub,
  BsArrowLeft,
  BsCalendar3,
} from "react-icons/bs";
import { FaGlobe, FaCode, FaLayerGroup, FaCheckCircle } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetchProject();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/projects");
      const data = await response.json();
      if (Array.isArray(data)) {
        const found = data.find((p) => String(p.id) === String(id));
        setProject(found || null);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching project:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="project-detail-loader">
        <div className="loader-ring">
          <div /><div /><div /><div />
        </div>
        <p className="loader-text">Loading project…</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-notfound">
        <div className="notfound-icon">🚀</div>
        <h2 className="notfound-title">Project Not Found</h2>
        <p className="notfound-sub">This project doesn't exist.</p>
        <button className="back-btn" onClick={() => navigate("/")}>
          <BsArrowLeft /> Back to Portfolio
        </button>
      </div>
    );
  }

  const techStack = project.technologies
    ? Array.isArray(project.technologies)
      ? project.technologies
      : project.technologies.split(",").map((t) => t.trim())
    : [];

  const features = project.features
    ? Array.isArray(project.features)
      ? project.features
      : project.features.split(",").map((f) => f.trim())
    : [];

  return (
    <div className="project-detail-page">
      {/* Ambient blobs */}
      <div className="pd-blob pd-blob-1" />
      <div className="pd-blob pd-blob-2" />

      {/* ── Top Nav ── */}
      <nav className="pd-nav">
        <button className="pd-back-btn" onClick={() => navigate(-1)}>
          <BsArrowLeft className="pd-back-icon" />
          <span>Back</span>
        </button>
        <div className="pd-nav-title">Case Study</div>
        <div style={{ width: "80px" }} /> {/* spacer to centre title */}
      </nav>

      {/* ── Main container ── */}
      <div className="pd-container">

        {/* ── Project image (contained, not full-bleed) ── */}
        <div className="pd-image-wrap">
          <img
            src={project.image_url}
            alt={project.title}
            className="pd-image"
          />
          <div className="pd-image-shine" />
        </div>

        {/* ── Title row + action buttons ── */}
        <div className="pd-title-row">
          <div className="pd-title-group">
            <span className="pd-badge"><FaCode /> Case Study</span>
            <h1 className="pd-title">{project.title}</h1>
            {project.category && (
              <span className="pd-category">{project.category}</span>
            )}
          </div>

          {/* ── ONE set of CTA buttons ── */}
          <div className="pd-actions">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-action-btn pd-action-gh"
              >
                <BsGithub className="pd-action-icon" />
                <span>Source Code</span>
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-action-btn pd-action-live"
              >
                <HiExternalLink className="pd-action-icon" />
                <span>View Live</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="pd-tabs">
          {["overview", "tech"].map((tab) => (
            <button
              key={tab}
              className={`pd-tab ${activeTab === tab ? "pd-tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "overview" ? (
                <><FaLayerGroup /> Overview</>
              ) : (
                <><FaCode /> Tech Stack</>
              )}
            </button>
          ))}
        </div>

        {/* ── Tab content ── */}
        <div className="pd-tab-content">
          {activeTab === "overview" && (
            <div className="pd-overview">
              <h2 className="pd-section-title">About This Project</h2>
              <p className="pd-description">
                {project.description || "No description available."}
              </p>

              {features.length > 0 && (
                <>
                  <h3 className="pd-subsection-title">Key Features</h3>
                  <ul className="pd-feature-list">
                    {features.map((feat, i) => (
                      <li key={i} className="pd-feature-item">
                        <FaCheckCircle className="pd-feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Meta info inline */}
              <div className="pd-meta-strip">
                {project.category && (
                  <div className="pd-meta-pill">
                    <span className="pd-meta-pill-label">Category</span>
                    <span className="pd-meta-pill-value">{project.category}</span>
                  </div>
                )}
                {project.created_at && (
                  <div className="pd-meta-pill">
                    <span className="pd-meta-pill-label"><BsCalendar3 /> Date</span>
                    <span className="pd-meta-pill-value">
                      {new Date(project.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                )}
                {techStack.length > 0 && (
                  <div className="pd-meta-pill">
                    <span className="pd-meta-pill-label">Stack</span>
                    <span className="pd-meta-pill-value">
                      {techStack.slice(0, 3).join(", ")}
                      {techStack.length > 3 && ` +${techStack.length - 3}`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="pd-tech">
              <h2 className="pd-section-title">Technology Stack</h2>
              {techStack.length > 0 ? (
                <div className="pd-tech-grid">
                  {techStack.map((tech, i) => (
                    <div key={i} className="pd-tech-chip">
                      <span className="pd-tech-dot" />
                      {tech}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="pd-muted">No tech stack info available.</p>
              )}
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default ProjectDetail;
