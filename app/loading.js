"use client";
import Image from "next/image";
import { BarLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
      {/* الشعار */}
      <Image
        src="/images/Logo.png" 
        alt="Loading..."
        width={150} 
        height={150}
        className="mb-4"
      />
      
      {/* الـ Loader */}
      <BarLoader color="#184b72" width={150} />
    </div>
  );
}
