import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    github_url: "",
    live_url: "",
    image_url: "",
    featured: false,
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjects();
    }
  }, [isLoggedIn]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/projects");
      const data = await response.json();

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
      } else {
        alert("Login failed. Check username and password.");
      }
    } catch (error) {
      alert("Login failed. Server error: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.title ||
      !formData.description ||
      !formData.github_url ||
      !formData.live_url ||
      !formData.image_url
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const url = editingProject
        ? `https://porfoliobe.abdurehman.com/api/projects/${editingProject.id}`
        : "https://porfoliobe.abdurehman.com/api/projects";

      const method = editingProject ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          editingProject
            ? "Project updated successfully!"
            : "Project added successfully!",
        );

        // Reset form and refresh projects
        setFormData({
          title: "",
          description: "",
          technologies: "",
          github_url: "",
          live_url: "",
          image_url: "",
          featured: false,
        });
        setEditingProject(null);
        fetchProjects();
      } else {
        alert("Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error saving project: " + error.message);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies || "",
      github_url: project.github_url,
      live_url: project.live_url,
      image_url: project.image_url,
      featured: Boolean(project.featured),
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await fetch(
          `https://porfoliobe.abdurehman.com/api/projects/${id}`,
          {
            method: "DELETE",
          },
        );

        const data = await response.json();

        if (data.success) {
          alert("Project deleted successfully!");
          fetchProjects();
        } else {
          alert("Error: " + data.error);
        }
      } catch (error) {
        alert("Error deleting project: " + error.message);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      technologies: "",
      github_url: "",
      live_url: "",
      image_url: "",
      featured: false,
    });
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1e2024] to-[#23272b]">
        <div className="bg-[#0B1120] p-8 rounded-lg shadow-shadowOne w-96">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginInputChange}
                className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-designColor text-white py-3 rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const projectsArray = Array.isArray(projects) ? projects : [];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2024] to-[#23272b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Manage Projects</h1>
          <div className="flex gap-4">
            <Link
              to="/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              ← Back to Dashboard
            </Link>
            <a
              href="/"
              className="bg-designColor text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Add/Edit Project Form */}
        <div className="bg-[#0B1120] p-6 rounded-lg shadow-shadowOne mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {editingProject ? "✏️ Edit Project" : "➕ Add New Project"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Technologies</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                />
              </div>

              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-400 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-400 mb-2">Image URL *</label>
                <input
                  type="url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              {formData.image_url && (
                <div className="mb-4 md:col-span-2">
                  <label className="block text-gray-400 mb-2">
                    Image Preview
                  </label>
                  <div className="border border-gray-700 rounded-lg p-2 bg-[#1e2024]">
                    <img
                      src={formData.image_url}
                      alt="Preview"
                      className="max-h-40 rounded-lg mx-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/300x200?text=Invalid+Image+URL";
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">GitHub URL *</label>
                <input
                  type="url"
                  name="github_url"
                  value={formData.github_url}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">
                  Live Demo URL *
                </label>
                <input
                  type="url"
                  name="live_url"
                  value={formData.live_url}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="flex items-center text-gray-400">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  Featured Project
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-designColor text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition"
              >
                {editingProject ? "Update Project" : "Add Project"}
              </button>

              {editingProject && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Projects List */}
        <div className="bg-[#0B1120] p-6 rounded-lg shadow-shadowOne">
          <h2 className="text-2xl font-bold text-white mb-6">
            📋 Existing Projects ({projectsArray.length})
          </h2>

          {projectsArray.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No projects yet. Add your first one above!
            </p>
          ) : (
            <div className="space-y-4">
              {projectsArray.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 bg-[#1e2024] rounded-lg hover:bg-opacity-80 transition"
                >
                  <div className="flex items-center gap-4">
                    {project.image_url && (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/64x64?text=No+Image";
                        }}
                      />
                    )}
                    <div>
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {project.description?.substring(0, 100)}...
                      </p>
                      {project.technologies && (
                        <p className="text-xs text-gray-500 mt-1">
                          Tech: {project.technologies}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
