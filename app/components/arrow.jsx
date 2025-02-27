"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function ArrowBtn() {
  const [show, setShow] = useState(false);

  // مراقبة التمرير
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // يظهر الزر بعد 300px من التمرير
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // العودة إلى الأعلى عند الضغط
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-[#184b72] text-white p-2 rounded-lg shadow-lg transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ArrowBtn;
