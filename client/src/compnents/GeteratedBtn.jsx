import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GenerateBtn = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full text-center py-16"
      style={{
        background: 'linear-gradient(to bottom, #111827, #1F2937, #111827)', // Dark theme
      }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white py-6 md:py-16">
        See the Magic. Try Now
      </h1>
      <button
        onClick={() => navigate('/buy')}
        className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 hover:scale-105 transition-all duration-500"
      >
        Subscription
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
