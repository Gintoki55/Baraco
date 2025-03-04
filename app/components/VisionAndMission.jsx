"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const Vision = () => (
    <>
        Connecting people, businesses, and communities to a better future through innovative trading and logistics solutions. 
        <b>Our goal is to be the world’s most preferred supply chain logistics company,</b> delivering exceptional value through insight, service quality, and continuous innovation.
    </>
);

const Mission = () => (
    <>
        <b>To be Earth's most customer-centric trading and logistics company,</b> where clients can find and access the best products and services—both online and offline—at the most competitive prices. 
        We strive to bridge global markets with seamless trade and sustainable growth.
    </>
);

function VisionAndMission() {
    return (
        <div className="flex items-center">
            {/* صورة */}
            <motion.div 
                className="max-lg:hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image 
                    src="/images/about2.png" 
                    alt="vision and mission"
                    className="object-cover bg-transparent"
                    width={700}
                    height={700}
                />
            </motion.div>

            {/* نص الرؤية والرسالة */}
            <motion.div 
                className="sm:max-w-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div>
                    <h2 className="sm:text-3xl text-xl font-bold text-[#184b72] mb-4 flex items-center gap-2">
                        Our Vision & Mission
                    </h2>
                    <hr className="h-2 bg-[#184b72] sm:w-[340px] lg:block hidden"/>
                </div>
                
                <motion.p 
                    className="text-gray-600 leading-relaxed mt-5 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Vision />
                </motion.p>
                
                <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Mission />
                </motion.p>
            </motion.div>
        </div>
    );
}

export default VisionAndMission;
