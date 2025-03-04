"use client";
import React, { useState, useEffect } from "react";
import { servicesItems } from '../constant';

function ServicesJsx() {
  const [expanded, setExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500); 
  }, []);

  const shortDescription = (
    <>
      <span className={isLoaded ? "" : "bg-gray-300 text-transparent rounded"}>
        At Baraco Trading & Logistics, we provide <b>integrated solutions</b> in 
        <b> transportation</b>, <b>warehousing</b>, <b>shipping</b>, and 
        <b> supply chain management</b>.
      </span>
    </>
  );

  const fullDescription = (
    <>
      <span className={isLoaded ? "" : "bg-gray-300 text-transparent rounded"}>
        At Baraco Trading & Logistics, we are committed to providing 
        <b> integrated solutions</b> that meet the needs of 
        <b> transportation</b>, <b>warehousing</b>, <b>shipping</b>, and 
        <b> supply chain management</b> with <b>efficiency</b> and <b>reliability</b>. 
        With our <b>extensive experience</b>, we offer <b>advanced services</b> 
        that support various industries, enhancing <b>business operations</b> 
        and elevating <b>logistics services</b> both <b>locally</b> and <b>globally</b>.
      </span>
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#184b72]">
            Our Services
          </h2>
          <p className="text-gray-500 sm:text-xl Inter">
            {expanded ? fullDescription : shortDescription}
            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                className="ml-2 text-[#184b72] hover:text-[#193850] font-medium hover:underline"
              >
                Read More
              </button>
            )}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 max-md:max-w-[500px] md:space-y-0">
          {servicesItems.map(({ title, description, img }) => (
            <div key={title}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {img}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-[#193850]">
                {isLoaded ? title : <span className="bg-gray-300 text-transparent rounded">{title}</span>}
              </h3>
              <p className="text-gray-500">
                {isLoaded ? description : <span className="bg-gray-300 text-transparent rounded">{description}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesJsx;
