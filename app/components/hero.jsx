"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero({ title, subtitle, image, textSize = "text-5xl sm:text-7xl", imgClass }) {
  return (
    <section className="relative sm:min-h-screen h-[329px] flex items-center justify-center text-center px-6">
      {/* خلفية الصورة */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={image} alt={title} fill priority className={`object-cover ${imgClass}`} />
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* محتوى الـ Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <h1 className={`font-bold drop-shadow-lg text-white ${textSize}`}>{title}</h1>
        <p className="text-lg sm:text-2xl text-white max-w-xl mt-3 sm:mt-5 drop-shadow-md">{subtitle}</p>
      </motion.div>
    </section>
  );
}

export default Hero;
