import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import ProjectDetail from "./components/projects/ProjectDetail";
import Resume from "./components/resume/Resume";
import Sidebar from "./components/banner/stats";
import AdminMain from "./components/AdminMain";
import AdminDashboard from "./components/AdminDashboard";
import Testimonials from "./components/tesimonial/Testimonial";
import AdminTestimonials from "./components/AdminTestimonials";
import AdminExperience from "./components/AdminExperience";
import AdminBanner from "./components/AdminBanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Portfolio Route */}
        <Route
          path="/"
          element={
            <div className="w-full h-auto bg-bodyColor text-lightText px-4">
              <Navbar />
              <div className="max-w-screen-xl mx-auto">
                <Banner />
                <Sidebar />
                <Features />
                <Projects />
                <Resume />
                <Testimonials />
                <Contact />
                <Footer />
                <FooterBottom />
              </div>
            </div>
          }
        />
        {/* Project Detail Page */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Admin Main Dashboard */}
        <Route path="/admin" element={<AdminMain />} />
        {/* Admin Banner Route */}
        <Route path="/admin/banner" element={<AdminBanner />} />;
        {/* Admin Projects */}
        <Route path="/admin/projects" element={<AdminDashboard />} />
        {/* Admin Testimonials */}
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        {/* Admin Experience - NEW */}
        <Route path="/admin/experience" element={<AdminExperience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
