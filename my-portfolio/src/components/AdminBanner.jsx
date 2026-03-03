import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaImage, FaTrash, FaCheck, FaUpload } from "react-icons/fa";

const AdminBanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [banners, setBanners] = useState([]);
  const [activeBanner, setActiveBanner] = useState(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [formData, setFormData] = useState({
    image_url: "",
    alt_text: "Banner Image",
  });
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (isLoggedIn) {
      fetchBanners();
    }
  }, [isLoggedIn]);

  const fetchBanners = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/banner");
      const data = await response.json();
      setBanners(data);

      // Find active banner
      const active = data.find((b) => b.is_active);
      setActiveBanner(active);
    } catch (error) {
      console.error("Error fetching banners:", error);
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
      if (data.success) {
        setIsLoggedIn(true);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image_url: url });
    setPreviewUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image_url) {
      alert("Please enter an image URL");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/banner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Banner image updated successfully!");
        setFormData({ image_url: "", alt_text: "Banner Image" });
        setPreviewUrl("");
        fetchBanners();
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this banner image?")) {
      try {
        await fetch(`http://localhost:5000/api/banner/${id}`, {
          method: "DELETE",
        });
        fetchBanners();
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
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Manage Banner Image</h1>
          <Link
            to="/admin"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            ← Back
          </Link>
        </div>

        {/* Current Active Banner */}
        {activeBanner && (
          <div className="bg-[#0B1120] p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCheck className="text-green-500" /> Current Active Banner
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src={activeBanner.image_url}
                alt={activeBanner.alt_text}
                className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover border-4 border-designColor/30"
              />
              <div>
                <p className="text-gray-400">
                  <span className="text-white">URL:</span>{" "}
                  {activeBanner.image_url}
                </p>
                <p className="text-gray-400 mt-2">
                  <span className="text-white">Last Updated:</span>{" "}
                  {new Date(activeBanner.updated_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Upload New Banner */}
        <div className="bg-[#0B1120] p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaUpload className="text-designColor" /> Upload New Banner
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Image URL *</label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleImageUrlChange}
                placeholder="https://example.com/your-image.jpg"
                className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
                required
              />
              <p className="text-gray-500 text-sm mt-1">
                Use any image URL (Google Drive, Imgur, Cloudinary, etc.)
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-400 mb-2">
                Alt Text (Optional)
              </label>
              <input
                type="text"
                name="alt_text"
                value={formData.alt_text}
                onChange={handleInputChange}
                placeholder="Banner Image Description"
                className="w-full p-3 bg-[#1e2024] text-white rounded-lg border border-gray-700 focus:border-designColor outline-none"
              />
            </div>

            {/* Preview */}
            {previewUrl && (
              <div className="mb-6">
                <label className="block text-gray-400 mb-2">Preview</label>
                <div className="bg-[#1e2024] p-4 rounded-lg flex justify-center">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-[150px] h-[150px] rounded-full object-cover border-4 border-designColor/30"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/150x150/1e2024/ff014f?text=Invalid+URL";
                    }}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Set as Active Banner
            </button>
          </form>
        </div>

        {/* Banner History */}
        <div className="bg-[#0B1120] p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaImage className="text-designColor" /> Banner History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`bg-[#1e2024] p-4 rounded-lg ${banner.is_active ? "border-2 border-green-500" : ""}`}
              >
                <div className="flex gap-4">
                  <img
                    src={banner.image_url}
                    alt={banner.alt_text}
                    className="w-20 h-20 rounded-full object-cover border-2 border-designColor/30"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">
                      <span className="text-white">Uploaded:</span>{" "}
                      {new Date(banner.updated_at).toLocaleDateString()}
                    </p>
                    {banner.is_active && (
                      <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded mt-2">
                        Active
                      </span>
                    )}
                  </div>
                </div>
                {!banner.is_active && (
                  <button
                    onClick={() => handleDelete(banner.id)}
                    className="mt-3 text-red-500 hover:text-red-400 text-sm flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBanner;
