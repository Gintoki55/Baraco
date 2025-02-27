"use client";
import Image from 'next/image';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Content = () => (
    <>
    Baraco Trading & Contracting Company has been a leading global player in trading, logistics, and fuel supply in Oman <b>since 1998.</b> We offer a wide range of services, <b>including trading, international agency representation, factory construction, energy solutions, real estate, shipping, exhibition and conference organization, livestock, fisheries, and tourism.</b> Our specialized value-added services make Baraco Trading & Contracting Company a comprehensive outsourcing solution for trading, logistics, fuel supply, fuel management, and other related activities. <b>We are the smart choice for businesses seeking knowledgeable, reliable, and efficient services.</b>
    </>
)
    

function WhoWeAre() {
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
        <div className="sm:max-w-2xl" data-aos="fade">
            <div>
                <h2 className="sm:text-3xl  text-2xl font-bold text-[#184b72] mb-4 ">Who We Are</h2>
                <hr className='h-2 bg-[#184b72] w-[200px] lg:block hidden'/>
            </div>
            <p className="sm:text-lg text-md text-gray-600 leading-relaxed mt-3">
                <Content />
            </p>
        </div>
    
        <div className="max-lg:hidden">
            <Image 
                src="/images/about1.png" 
                alt='who we are'
                className='object-cover'
                width={700}
                height={700}
            />
        </div>
    </div>
  )
}

export default WhoWeAre;