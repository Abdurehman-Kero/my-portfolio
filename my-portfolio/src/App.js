import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Sidebar from "./components/banner/stats";
import AdminDashboard from "./components/AdminDashboard";

// import Testimonial from "./components/tesimonial/Testimonial";

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
                {/* <Testimonial /> */}
                <Contact />
                <Footer />
                <FooterBottom />
              </div>
            </div>
          }
        />

        {/* Admin Route */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
