"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheckIcon, LightBulbIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const values = [
  { 
    icon: ShieldCheckIcon, 
    title: "Commitment", 
    text: "Building lasting relationships with excellence." ,
    color: "text-blue-600",
    bgColor: "bg-blue-200"
  },
  { 
    icon: LightBulbIcon, 
    title: "Innovation", 
    text: "Pioneering solutions to meet market demands." ,
    color: "text-yellow-600",
    bgColor: "bg-yellow-200"
  },
  { 
    icon: CheckBadgeIcon, 
    title: "Transparency", 
    text: "Fostering trust through honesty and openness." ,
    color: "text-green-600",
    bgColor: "bg-green-200"
  },
];

function BusinessSection() {
  return (
    <motion.section 
      className="py-16 text-center px-2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h1 className="sm:text-4xl text-3xl font-bold text-gray-900">
        Our Core Values at <span className="text-blue-900">Baraco</span>
      </h1>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto sm:text-xl text-sm">
        At Barkhad International Investment Co., we uphold values that drive sustainable growth and strong partnerships.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {values.map(({ icon: Icon, title, text, color, bgColor }, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${bgColor}`} aria-label={title}>
              <Icon className={`w-10 h-10 ${color}`} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mt-4">{title}</h2>
            <p className="text-gray-600 mt-2">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default BusinessSection;
