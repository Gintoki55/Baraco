"use client";
import React, { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Where is the company Location?",
      answer:
        "The Location of Baraco Trading & Contracting Company is located in Awaqad, Salalah City, Oman.",
    },
    {
      question: "Which companies does Baraco Represent?",
      answer:
        "We are representatives of several global companies such as Ashoka Group, Turn-Key Fish Farms, Raysut Oasis Trading, and Al Salaam Travel & Tourism.",
    },
    {
      question: "Do you provide customized solutions for startups or large projects?",
      answer:
        "Yes, we work with businesses of all sizes, from startups to large enterprises, offering tailored solutions that meet your business needs.",
    },
    {
      question: "How can I contact you?",
      isJSX: true, // Add a flag to indicate JSX content
    },
  ];

  return (
    <div className="w-full mx-auto px-2 sm:px-12 md:px-16 lg:px-24 py-12">
      <h1 className="text-xl sm:text-4xl font-semibold text-[#193850] text-center mb-8">
        Frequently Asked Questions ❓ (FAQs)
      </h1>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
              className="flex items-center justify-between w-full p-4 text-gray-700 font-medium hover:bg-gray-100 text-lg sm:text-xl focus:outline-none"
            >
              <span className="font-semibold text-left">{faq.question}</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100 p-4 bg-gray-50" : "max-h-0 opacity-0"
              }`}
            >
              {/* Render JSX for the specific FAQ */}
              {faq.isJSX ? (
                <div className="text-gray-600 text-base sm:text-lg">
                  <p><strong>📍 Location:</strong> Oman, Salalah, Awaqad</p>
                  <p><strong>📞 Phone Number:</strong> +968 99491006</p>
                  <p><strong>📧 Email:</strong> barkhad1969@gmail.com</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li className="my-2">More contact details...</li>
                  </ul>
                </div>
              ) : (
                <p className="text-gray-600 text-base sm:text-lg">{faq.answer}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQs;
