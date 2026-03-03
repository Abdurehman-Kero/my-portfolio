import React, { useState, useEffect } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/projects");
      const data = await response.json();

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
      setLoading(false);
    }
  };

  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (loading) {
    return (
      <section
        id="projects"
        className="w-full py-16 border-b-[1px] border-b-gray-800"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Works"
          />
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce" />
            <div className="w-3 h-3 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] rounded-full animate-bounce delay-100" />
            <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce delay-200" />
          </div>
          <p className="text-gray-400 ml-4">Loading projects...</p>
        </div>
      </section>
    );
  }

  const projectsArray = Array.isArray(projects) ? projects : [];

  return (
    <section
      id="projects"
      className="w-full py-16 border-b-[1px] border-b-gray-800 relative overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10">
        <div className="flex justify-center items-center text-center mb-12">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Works"
          />
        </div>

        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-full" />

        {projectsArray.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
            {projectsArray.map((project, index) => (
              <div
                key={project.id}
                className="transform hover:scale-105 transition-all duration-500"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <ProjectsCard
                  title={project.title}
                  des={project.description}
                  src={project.image_url}
                  link1={project.github_url}
                  link2={project.live_url}
                  onImageClick={() => handleImageClick(project.live_url)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
