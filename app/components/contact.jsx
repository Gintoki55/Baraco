import React from "react";
import Link from 'next/link';

function ContactSection() {
  return (
    <div className="flex flex-row items-center bg-gray-50 sm:px-20 sm:py-8 p-4 max-lg:flex-col gap-10 relative">

      <div className="flex-1 flex flex-col gap-5 z-20">
        <h2 className="text-2xl font-bold text-[#193850]">
          Let's Build the Future of Global Trade Together
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Whether you're looking for investment opportunities, strategic trade partnerships, or innovative business solutions, 
          Barkhad International is here to connect you with success. Reach out and let’s create impactful global ventures together.
        </p>
      </div>
        <Link
        href="/contact"
        className="bg-[#193850] border border-[#193850] hover:bg-transparent text-white hover:text-[#193850] font-semibold px-6 py-3 rounded-lg transition duration-300"
      >
        Get in Touch
      </Link>

    </div>
  );
}

export default ContactSection;
