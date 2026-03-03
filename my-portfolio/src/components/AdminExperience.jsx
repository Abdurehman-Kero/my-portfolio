import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const AdminExperience = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [editingExp, setEditingExp] = useState(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [formData, setFormData] = useState({
    year: "",
    quarter: "",
    title: "",
    company: "",
    description: "",
    technologies: "",
    achievements: "",
    companyLogo: "",
    currentPosition: false,
    displayOrder: 0,
  });

  useEffect(() => {
    if (isLoggedIn) fetchExperiences();
  }, [isLoggedIn]);

  const fetchExperiences = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/experiences");
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (data.success) setIsLoggedIn(true);
      else alert("Login failed");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingExp
        ? `http://localhost:5000/api/experiences/${editingExp.id}`
        : "http://localhost:5000/api/experiences";
      const method = editingExp ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert(editingExp ? "Experience updated!" : "Experience added!");
        setFormData({
          year: "",
          quarter: "",
          title: "",
          company: "",
          description: "",
          technologies: "",
          achievements: "",
          companyLogo: "",
          currentPosition: false,
          displayOrder: 0,
        });
        setEditingExp(null);
        fetchExperiences();
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleEdit = (exp) => {
    setEditingExp(exp);
    setFormData(exp);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this experience?")) {
      try {
        await fetch(`http://localhost:5000/api/experiences/${id}`, {
          method: "DELETE",
        });
        fetchExperiences();
      } catch (error) {
        alert("Error deleting: " + error.message);
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1e2024] to-[#23272b]">
        <div className="bg-[#0B1120] p-8 rounded-lg w-96">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Admin Login
          </h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 mb-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 mb-6"
              required
            />
            <button
              type="submit"
              className="w-full bg-designColor text-white py-3 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2024] to-[#23272b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Manage Experience</h1>
          <Link
            to="/admin"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            ← Back
          </Link>
        </div>

        {/* Form */}
        <div className="bg-[#0B1120] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {editingExp ? "Edit Experience" : "Add Experience"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="year"
                placeholder="Year (e.g., 2025)"
                value={formData.year}
                onChange={handleInputChange}
                className="p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
                required
              />
              <input
                type="text"
                name="quarter"
                placeholder="Quarter (e.g., III)"
                value={formData.quarter}
                onChange={handleInputChange}
                className="p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
              />
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                value={formData.title}
                onChange={handleInputChange}
                className="p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="md:col-span-2 p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
                required
              />
              <input
                type="text"
                name="technologies"
                placeholder="Technologies (comma separated)"
                value={formData.technologies}
                onChange={handleInputChange}
                className="md:col-span-2 p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
              />
              <input
                type="number"
                name="displayOrder"
                placeholder="Display Order"
                value={formData.displayOrder}
                onChange={handleInputChange}
                className="p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700"
              />
              <label className="flex items-center text-gray-400">
                <input
                  type="checkbox"
                  name="currentPosition"
                  checked={formData.currentPosition}
                  onChange={handleInputChange}
                  className="mr-2"
                />{" "}
                Current Position
              </label>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="bg-designColor text-white px-6 py-3 rounded-lg"
              >
                {editingExp ? "Update" : "Add"}
              </button>
              {editingExp && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingExp(null);
                    setFormData({
                      year: "",
                      quarter: "",
                      title: "",
                      company: "",
                      description: "",
                      technologies: "",
                      achievements: "",
                      companyLogo: "",
                      currentPosition: false,
                      displayOrder: 0,
                    });
                  }}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List */}
        <div className="bg-[#0B1120] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6">
            Experience List
          </h2>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#1e2024] p-4 rounded-lg mb-4 flex justify-between items-center"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-600">
                    {exp.year}
                  </span>
                  {exp.quarter && (
                    <span className="text-designColor font-bold">
                      {exp.quarter}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-bold">{exp.title}</h3>
                {exp.company && (
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                )}
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {exp.description}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(exp)}
                  className="bg-blue-600 text-white p-2 rounded"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(exp.id)}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminExperience;
