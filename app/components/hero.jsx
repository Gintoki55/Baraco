"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      disable: "phone", // Prevent animations on mobile for better performance
    });
  }, []);

  return (
    <section
      id="home"
      className="relative sm:min-h-screen h-[329px] flex items-center justify-center text-center px-6"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/b22.png"
          alt="Home page image"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center"
        data-aos="fade-up"
      >
        <h1 className="text-white font-bold drop-shadow-lg text-5xl sm:text-7xl tracking-wide">
          BARACO
        </h1>
        <p className="text-white text-lg sm:text-2xl max-w-xl mt-3 sm:mt-5 drop-shadow-md leading-relaxed">
          The quality you expect, the options you need.
        </p>
      </div>
    </section>
  );
}

export default Hero;
