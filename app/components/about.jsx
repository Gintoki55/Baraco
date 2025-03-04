"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const services = [
  "Global Trading & Agencies",
  "Logistics & Shipping",
  "Fuel Supply & Management",
  "Energy & Industrial Projects",
  "Real Estate & Property Development",
  "Fisheries & Livestock",
  "Manufacturing & Factory Construction",
  "Exhibitions & Conference Organization",
  "Tourism & Hospitality",
];

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row px-4 py-12 lg:px-28">
      {/* Left Section (Text Content) */}
      <div className="flex-1 text-left max-lg:max-w-[500px]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#184b72] mb-6">
          About Us
        </h1>

        {/* Skeleton or actual content */}
        {loading ? (
          <div className="space-y-3">
            <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="h-6 w-5/6 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ) : (
          <p className="text-lg md:text-xl mb-4 text-slate-700">
            <b>Baraco Trading & Contracting Company</b> has been a leading force
            in Trading, Logistics, and Fuel Supply in Oman{" "}
            <b>since 1998.</b> Over the years, we have expanded our expertise
            to cover a wide range of industries, making us a trusted name in
            multiple sectors.
          </p>
        )}

        {/* Services List */}
        <ul className="text-base md:text-lg text-gray-700 leading-relaxed mt-5 space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <CheckBadgeIcon className="w-6 h-6 text-[#255478] mr-2" />
              {loading ? <span className="bg-gray-300 text-transparent rounded">{service}</span> : service }
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2 text-lg font-medium text-white bg-[#184b72] rounded-lg hover:bg-[#375675] transition duration-300"
          >
            Learn More
            <svg
              className="ml-2 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0 max-lg:hidden">
        <Image
          src="/images/Logo.png"
          alt="Company Logo"
          width={400}
          height={400}
          className="max-w-[80%] md:max-w-[60%] lg:max-w-[80%] object-contain"
        />
      </div>
    </section>
  );
}

export default About;
