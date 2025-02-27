"use client";
import Image from 'next/image';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => (
    <>
    Connecting people, businesses, and communities to a better future through innovative trading and logistics solutions. <b>Our goal is to be the world’s most preferred supply chain logistics company,</b> delivering exceptional value through insight, service quality, and continuous innovation.
    </>
);

const Mission = () => (
    <>
    <b>To be Earth's most customer-centric trading and logistics company,</b> where clients can find and access the best products and services—both online and offline—at the most competitive prices. We strive to bridge global markets with seamless trade and sustainable growth.
    </>
)

function VisionAndMission() {
     useEffect(() => {
            AOS.init({
              duration: 800, // مدة الحركة
              easing: "ease-in-out", // نوع التأثير
              once: true, // جعل الأنيميشن يحدث مرة واحدة فقط
              disable: "phone",
            });
          }, []);
  return (
    <div className='flex items-center'>
         <div className="max-lg:hidden">
            <Image 
                src="/images/about2.png" 
                alt='vision and mission'
                className='object-cover bg-transparent'
                width={700}
                height={700}
            />
         </div>

        {/* { Vision } */}
        <div className='sm:max-w-2xl' data-aos="fade">
            <div>
                <h2 className="sm:text-3xl text-xl font-bold text-[#184b72] mb-4 flex items-center gap-2">Our Vision & Mission</h2>
                <hr className='h-2 bg-[#184b72] sm:w-[340px] lg:block hidden'/>
            </div>
            <p className="text-gray-600 leading-relaxed mt-5 mb-10">
                <Vision />
            </p>
            <p className="text-gray-600 leading-relaxed">
                <Mission />
            </p>
        </div>

    </div>
  )
}


export default VisionAndMission;