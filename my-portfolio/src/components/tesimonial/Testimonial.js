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
      const response = await fetch("http://localhost:5000/api/testimonials");
      const data = await response.json();
      setTestimonials(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-designColor" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-designColor" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-designColor" />);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <section
        id="testimonials"
        className="w-full py-12 border-b-[1px] border-b-black"
      >
        <div className="flex justify-center items-center">
          <p className="text-white">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT PEOPLE SAY" des="Testimonials" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 mt-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-designColor">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-designColor/20 flex items-center justify-center text-2xl font-bold text-designColor">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-designColor text-sm">
                  {testimonial.position}
                </p>
                <p className="text-gray-400 text-xs">{testimonial.company}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {renderStars(testimonial.rating)}
            </div>

            <p className="text-gray-300 italic leading-relaxed">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
