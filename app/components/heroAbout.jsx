"use client";
import React, { useEffect } from "react";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

function HeroAbout() {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الحركة
      easing: "ease-in-out", // نوع التأثير
      once: true, // جعل الأنيميشن يحدث مرة واحدة فقط
      disable: "phone",
    });
        }, [])
  return (
        <>
           <div className="absolute inset-0 w-full h-full">
             <Image 
               src="/images/b21.png" 
               alt="Baraco Trading & Logistics"
               fill 
               priority
               className="object-cover max-sm:object-right"
             />
             <div className="absolute inset-0 bg-gray-900/50"></div>
           </div>
           <div className="relative z-10" data-aos="fade-up">
             <h1 className="font-semibold text-white drop-shadow-lg text-4xl sm:text-7xl">
               About BARACO
             </h1>
             <p className="text-md sm:text-2xl text-white max-w-xl mt-3 sm:mt-5 drop-shadow-md">
               The quality you expect, the options you need.
             </p>
           </div>
        </>
  )
}

export default HeroAbout;