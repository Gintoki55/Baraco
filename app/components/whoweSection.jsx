"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const Content = () => (
    <>
        Baraco Trading & Contracting Company has been a leading global player in trading, logistics, and fuel supply in Oman 
        <b> since 1998.</b> We offer a wide range of services, <b>
        including trading, international agency representation, factory construction, energy solutions, real estate, shipping, exhibition and conference organization, livestock, fisheries, and tourism.</b> 
        Our specialized value-added services make Baraco Trading & Contracting Company a comprehensive outsourcing solution for trading, logistics, fuel supply, fuel management, and other related activities.
        <b> We are the smart choice for businesses seeking knowledgeable, reliable, and efficient services.</b>
    </>
);

function WhoWeAre() {
    return (
        <div className="flex items-center">
            <motion.div 
                className="sm:max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div>
                    <h2 className="sm:text-3xl text-2xl font-bold text-[#184b72] mb-4">
                        Who We Are
                    </h2>
                    <hr className="h-2 bg-[#184b72] w-[200px] lg:block hidden"/>
                </div>

                <motion.p 
                    className="sm:text-lg text-md text-gray-600 leading-relaxed mt-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Content />
                </motion.p>
            </motion.div>

            <motion.div 
                className="max-lg:hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image 
                    src="/images/about1.png" 
                    alt="who we are"
                    className="object-cover"
                    width={700}
                    height={700}
                />
            </motion.div>
        </div>
    );
}

export default WhoWeAre;
