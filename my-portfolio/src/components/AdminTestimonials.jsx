import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminTestimonials = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    testimonial: "",
    image: "",
    rating: 5,
    featured: true,
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isLoggedIn) {
      fetchTestimonials();
    }
  }, [isLoggedIn]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.position ||
      !formData.company ||
      !formData.testimonial
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const url = editingTestimonial
        ? `https://porfoliobe.abdurehman.com/api/testimonials/${editingTestimonial.id}`
        : "https://porfoliobe.abdurehman.com/api/testimonials";

      const method = editingTestimonial ? "PUT" : "POST";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          editingTestimonial
            ? "Testimonial updated successfully!"
            : "Testimonial added successfully!",
        );
        setFormData({
          name: "",
          position: "",
          company: "",
          testimonial: "",
          image: "",
          rating: 5,
          featured: true,
        });
        setEditingTestimonial(null);
        fetchTestimonials();
      } else {
        alert("Error: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error saving testimonial: " + error.message);
    }
  };

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
    setFormData(testimonial);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        const response = await fetch(
          `https://porfoliobe.abdurehman.com/api/testimonials/${id}`,
          {
            method: "DELETE",
          },
        );

        const data = await response.json();

        if (data.success) {
          alert("Testimonial deleted successfully!");
          fetchTestimonials();
        } else {
          alert("Error: " + data.error);
        }
      } catch (error) {
        alert("Error deleting testimonial: " + error.message);
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingTestimonial(null);
    setFormData({
      name: "",
      position: "",
      company: "",
      testimonial: "",
      image: "",
      rating: 5,
      featured: true,
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

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2024] to-[#23272b] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Manage Testimonials</h1>
          <div className="flex gap-4">
            <Link
              to="/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              ← Back to Dashboard
            </Link>
            <a
              href="/"
              className="bg-designColor text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Add/Edit Testimonial Form */}
        <div className="bg-[#0B1120] p-6 rounded-lg shadow-shadowOne mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {editingTestimonial
              ? "✏️ Edit Testimonial"
              : "➕ Add New Testimonial"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Position *</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Rating</label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-400 mb-2">
                  Image URL (optional)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                />
              </div>

              <div className="mb-4 md:col-span-2">
                <label className="block text-gray-400 mb-2">
                  Testimonial *
                </label>
                <textarea
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  rows="4"
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
                  Featured Testimonial
                </label>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="bg-designColor text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition duration-300"
              >
                {editingTestimonial ? "Update Testimonial" : "Add Testimonial"}
              </button>

              {editingTestimonial && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition duration-300"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Testimonials List */}
        <div className="bg-[#0B1120] p-6 rounded-lg shadow-shadowOne">
          <h2 className="text-2xl font-bold text-white mb-6">
            📋 Existing Testimonials ({testimonials.length})
          </h2>

          {testimonials.length === 0 ? (
            <p className="text-gray-400 text-center py-8">
              No testimonials yet. Add your first one above!
            </p>
          ) : (
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex items-center justify-between p-4 bg-[#1e2024] rounded-lg hover:bg-opacity-80 transition"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-bold text-lg">
                        {testimonial.name}
                      </h3>
                      <span className="text-designColor text-sm">•</span>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      "{testimonial.testimonial.substring(0, 100)}..."
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "text-designColor"
                              : "text-gray-600"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-sm"
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

export default AdminTestimonials;
