import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Title from "../layouts/Title";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/testimonials");
      const data = await response.json();
      console.log("Testimonials from DB:", data);

      // Ensure data is an array
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        console.error("API returned non-array:", data);
        setTestimonials([]);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#ff014f]" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#ff014f]" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-[#ff014f]" />);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <section
        id="testimonials"
        className="w-full py-16 border-b-[1px] border-b-gray-800"
      >
        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-gradient-to-r from-[#ff014f] to-[#ff6b9d] rounded-full animate-bounce delay-100" />
          <div className="w-3 h-3 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full animate-bounce delay-200" />
          <p className="text-gray-400 ml-2">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  // Safety check
  const testimonialsArray = Array.isArray(testimonials) ? testimonials : [];

  return (
    <section
      id="testimonials"
      className="w-full py-16 border-b-[1px] border-b-gray-800 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-[#9f55ff]/10 to-[#7000ff]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-[#ff014f]/10 to-[#ff6b9d]/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10">
        <div className="flex justify-center items-center text-center mb-12">
          <Title title="WHAT PEOPLE SAY" des="Testimonials" />
        </div>

        {/* Gradient line separator */}
        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-full" />

        {testimonialsArray.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">
              No testimonials yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mt-10">
            {testimonialsArray.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-[#1e2024] to-[#23272b] p-6 rounded-xl shadow-shadowOne border border-gray-800/50 hover:border-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff] via-[#ff014f] to-[#7000ff] rounded-xl blur-md" />
                  <div className="absolute inset-[1px] bg-gradient-to-br from-[#1e2024] to-[#23272b] rounded-xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Profile section */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9f55ff] to-[#7000ff] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#ff014f] transition-all duration-300 relative">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-[#9f55ff] to-[#7000ff] flex items-center justify-center text-2xl font-bold text-white">
                            {testimonial.name?.charAt(0) || "?"}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff014f] group-hover:to-[#ff6b9d] group-hover:bg-clip-text transition-all duration-300">
                        {testimonial.name || "Anonymous"}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-[#ff014f] transition-colors">
                        {testimonial.position || ""}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.company || ""}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating || 5)}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 italic leading-relaxed relative pl-6 pr-6">
                    <span className="text-4xl text-[#ff014f]/20 absolute -top-2 left-0">
                      "
                    </span>
                    <span className="relative z-10">
                      {testimonial.testimonial || ""}
                    </span>
                    <span className="text-4xl text-[#ff014f]/20 absolute -bottom-4 right-0">
                      "
                    </span>
                  </p>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
