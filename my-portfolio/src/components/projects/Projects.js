import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../layouts/Title";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/projects");
      const data = await response.json();
      setProjects(Array.isArray(data) ? data : []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const container = containerRef.current;
      const track = trackRef.current;
      const wrap = container.querySelector('.works-track-wrap');
      if (!wrap) return;

      const maxTranslate = track.scrollWidth - wrap.clientWidth;

      // Dynamically set height to perfectly match horizontal track length
      if (maxTranslate > 0) {
        container.style.height = `${maxTranslate + window.innerHeight}px`;
      } else {
        container.style.height = 'auto';
      }

      const rect = container.getBoundingClientRect();
      const stickyOffset = 96; 
      const scrollDistance = rect.height - window.innerHeight + stickyOffset;
      
      let progress = 0;
      if (maxTranslate > 0 && scrollDistance > 0 && rect.top <= stickyOffset) {
        progress = Math.max(0, Math.min(1, (stickyOffset - rect.top) / scrollDistance));
      }
      
      if (maxTranslate > 0) {
        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      } else {
        track.style.transform = `translateX(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Call on mount with a slight delay to ensure items are fully rendered
    setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [projects]);

  const scrollWithArrows = (dir) => {
    if (!containerRef.current) return;
    const scrollAmount = window.innerHeight * 0.5; // Scroll half a screen down/up per click
    window.scrollBy({
      top: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth"
    });
  };

  if (loading) {
    return (
      <section id="projects" className="works-section-container">
        <div className="works-section-sticky">
          <div className="works-header">
            <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Works" />
            <div className="works-divider" />
          </div>
          <div className="works-loading">
            <div className="works-spinner" />
            <span>Loading projects…</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="works-section-container" ref={containerRef}>
      <div className="works-section-sticky">
        <div className="works-blob works-blob-l" />
        <div className="works-blob works-blob-r" />

        <div className="works-header">
          <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Works" />
          <div className="works-divider" />
        </div>

        {projects.length === 0 ? (
          <div className="works-empty">
            <p>No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="works-track-wrap">
            <button
              className="works-arrow works-arrow-left"
              onClick={() => scrollWithArrows("left")}
              aria-label="Scroll backward"
            >
              <FiArrowLeft />
            </button>

            <div className="works-track" ref={trackRef}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="works-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && navigate(`/project/${project.id}`)
                  }
                  aria-label={`View ${project.title} project details`}
                >
                  <div className="works-card-img-wrap">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="works-card-img"
                    />
                    <div className="works-card-overlay">
                      <span className="works-card-cta">
                        View Details <HiOutlineExternalLink />
                      </span>
                    </div>
                  </div>
                  <div className="works-card-footer">
                    <h3 className="works-card-title">{project.title}</h3>
                    {project.category && (
                      <span className="works-card-tag">{project.category}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="works-arrow works-arrow-right"
              onClick={() => scrollWithArrows("right")}
              aria-label="Scroll forward"
            >
              <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
