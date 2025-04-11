import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center py-32"
      style={{
        background: 'linear-gradient(to bottom, #111827, #1F2937, #111827)', // Same dark theme
      }}
    >
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl font-bold text-center gap-2 bg-gray-800 px-28 py-4 rounded-full border border-gray-600 hover:scale-105 transition-all duration-700">
        How AI Magic Works
      </h1>
      <p className="text-lg text-gray-400 mt-5 mb-8">
        Transform Texts Into Stunning Images
      </p>

      {/* Steps List */}
      <div className="space-y-4 w-full max-w-3xl px-0 text-sm">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 px-8 bg-gray-800 shadow-md border border-gray-600 cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-medium text-white">{item.title}</h2>
              <p className="text-blue-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
