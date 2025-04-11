import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-30 px-6 w-full"
      style={{ background: '#111827', color: 'white' }} // Dark background
    >
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">User Reviews</h1>
      <p className="text-gray-400 mb-12">What our customers say</p>

      {/* Testimonials */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {/* User Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-16 border-2 border-gray-600"
              />

              {/* Name & Role */}
              <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-gray-400 mb-4">{testimonial.role}</p>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((_, index) => (
                    <img key={index} src={assets.rating_star} alt="Star" className="w-5" />
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-center text-sm text-gray-300">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
