import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from database
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projects");
      const data = await response.json();
      console.log("Projects from DB:", data); // Check what images are coming
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  // Handle image click to redirect to link2
  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="w-full py-12 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="flex justify-center items-center mt-20">
          <p className="text-white">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            des={project.description}
            src={project.image} // This is now the URL from database
            link1={project.link1}
            link2={project.link2}
            onImageClick={() => handleImageClick(project.link2)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
