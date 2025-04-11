import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 w-full"
      style={{ background: '#1E293B', color: 'white' }} // Dark background
    >
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className='w-14 h-14 sm:w-15 sm:h-15 rounded-full object-cover' />

      {/* Copyright Text */}
      <p className="flex-1 text-center md:text-left border-l md:border-l border-gray-600 pl-4 text-sm text-gray-400 max-sm:hidden">
        Copyright 2025 @picasu - All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-4">
  <a href="https://www.linkedin.com/in/rakesh-kumar-a25683287/" target="_blank" rel="noopener noreferrer">
    <img
      src={assets.facebook_icon}
      alt="Facebook"
      width={35}
      className="hover:scale-110 transition-all duration-300 cursor-pointer"
    />
  </a>

  <a href="https://www.instagram.com/rakesh_kl_rahul/" target="_blank" rel="noopener noreferrer">
    <img
      src={assets.instagram_icon}
      alt="Instagram"
      width={35}
      className="hover:scale-110 transition-all duration-300 cursor-pointer"
    />
  </a>

  <a href="https://x.com/rakesh_kl_rahul" target="_blank" rel="noopener noreferrer">
    <img
      src={assets.twitter_icon}
      alt="Twitter"
      width={35}
      className="hover:scale-110 transition-all duration-300 cursor-pointer"
    />
  </a>
</div>
    </div>
  );
};

export default Footer;
