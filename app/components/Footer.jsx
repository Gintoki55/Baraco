import React from "react";
import InputJsx from "./Input";

const sections = [
  {
    title: "Sections",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Social Links",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/bakhad-mohamed-77a44b174/" },
      { name: "Facebook", url: "https://www.facebook.com/amiirka.abdulrehman.16/?locale=ar_AR" },
      { name: "Instagram", url: "https://www.instagram.com/amiirkaabdulrehman?igsh=ZTl6czlndm00NjNw" },
      { name: "WhatsApp", url: "https://wa.me/96899491006" },
    ],
  },
  {
    title: "Contacts",
    links: [
      { name: "Phone: +968 99491006", url: "tel:+96899491006" },
      { name: "Email: barkhad1969@gmail.com", url: "mailto:barkhad1969@gmail.com" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row">
          {/* Logo & Description */}
          <div className="max-lg:mb-6">
            <a href="/" className="flex items-center">
              <img src="/images/Logo.png" className="h-24 mr-3" alt="Barkhad Logo" />
            </a>
            <p className="text-gray-700 mt-4 text-md">
              Barkhad International is a global solutions provider in trading, logistics, and more.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-2 gap-4 lg:gap-8 sm:grid-cols-4 lg:w-2/3 montserrat">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                  {section.title}
                </h2>
                <ul className="text-gray-700 font-light">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-3 whitespace-nowrap">
                      <a
                        href={link.url}
                        className="hover:underline"
                        {...(link.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Copyright */}
          <a
            href="https://musical-meringue-277dca.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm sm:text-lg text-gray-500 hover:underline text-center"
          >
            © 2023 Ahmed Barkhad™. All Rights Reserved.
          </a>

          {/* Input Field */}
          <InputJsx
            style="border-black focus:ring-black focus:border-black text-black"
            iconStyle="text-black"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
