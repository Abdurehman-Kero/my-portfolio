import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaComments,
  FaBriefcase,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminMain = () => {
  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2024] to-[#23272b] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0B1120] p-6 rounded-lg shadow-shadowOne mb-8"
        >
          <p className="text-gray-300 text-lg">
            Welcome to your admin dashboard. Choose what you'd like to manage:
          </p>
        </motion.div>

        {/* Admin Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Projects Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/admin/projects">
              <div className="bg-[#0B1120] p-8 rounded-lg shadow-shadowOne hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-designColor h-full flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#9f55ff]/20 to-[#7000ff]/20 rounded-full flex items-center justify-center">
                    <FaProjectDiagram className="text-4xl text-[#9f55ff]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Projects</h2>
                  <p className="text-gray-400">
                    Add, edit, or delete portfolio projects. Update project
                    details, links, and images.
                  </p>
                  <div className="mt-4 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white px-6 py-2 rounded-lg">
                    Manage →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Testimonials Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/admin/testimonials">
              <div className="bg-[#0B1120] p-8 rounded-lg shadow-shadowOne hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-designColor h-full flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#ff014f]/20 to-[#ff6b9d]/20 rounded-full flex items-center justify-center">
                    <FaComments className="text-4xl text-[#ff014f]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Testimonials
                  </h2>
                  <p className="text-gray-400">
                    Add, edit, or delete client testimonials. Manage reviews and
                    feedback from clients.
                  </p>
                  <div className="mt-4 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] text-white px-6 py-2 rounded-lg">
                    Manage →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Experience Card - NEW */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/admin/experience">
              <div className="bg-[#0B1120] p-8 rounded-lg shadow-shadowOne hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-designColor h-full flex flex-col">
                <div className="flex flex-col items-center text-center gap-4 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#9f55ff]/20 to-[#ff014f]/20 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-4xl text-designColor" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Experience</h2>
                  <p className="text-gray-400">
                    Manage your work history, including job titles, companies,
                    descriptions, and achievements.
                  </p>
                  <div className="mt-4 bg-gradient-to-r from-[#9f55ff] to-[#ff014f] text-white px-6 py-2 rounded-lg">
                    Manage →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-[#0B1120] p-6 rounded-lg shadow-shadowOne"
        >
          <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/admin/projects">
              <button className="bg-gradient-to-r from-[#9f55ff] to-[#7000ff] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300">
                + New Project
              </button>
            </Link>
            <Link to="/admin/testimonials">
              <button className="bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300">
                + New Testimonial
              </button>
            </Link>
            <Link to="/admin/experience">
              <button className="bg-gradient-to-r from-[#9f55ff] to-[#ff014f] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300">
                + New Experience
              </button>
            </Link>
            <a
              href="/"
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminMain;
