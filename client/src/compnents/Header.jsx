import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 min-h-screen"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(to bottom, #111827, #1F2937, #111827)', // Dark gradient
      }}
    >
      {/* Tagline */}
      <motion.div
        className="text-gray-300 inline-flex text-center gap-2 bg-gray-800 px-6 py-1 rounded-full border border-gray-600 hover:scale-105 transition-all duration-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best Transform Words into Art</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Turn Your Words into Stunning <span className="text-blue-500 font-bold"> Art</span> Instantly.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-center max-w-xl mx-auto mt-5 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with our AI-powered image generator that instantly turns your words into stunning visuals.
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-blue-600 hover:bg-blue-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center mt-16 gap-3"
      >
        {Array(6)
          .fill('')
          .map((item, index) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-2 text-gray-400"
      >
        Generated images from Picasu
      </motion.p>
    </motion.div>
  );
};

export default Header;
