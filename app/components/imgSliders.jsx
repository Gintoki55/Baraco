"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/images/b7.webp",
  "/images/b8.png",
  "/images/b9.jpeg",
  "/images/b10.jpeg",
  "/images/b11.jpeg",
  "/images/b12.jpeg",
  // "/images/b13.jpeg",
  "/images/b14.jpeg",
  "/images/b15.webp",
  "/images/b16.webp",
  "/images/b17.webp",
  "/images/b18.png",
  "/images/b19.webp",
  "/images/b20.jpeg",
  "/images/b21.png",
  "/images/b22.png",
  "/images/b1.jpeg",
  "/images/b2.jpeg",
  "/images/b3.jpeg",
  "/images/b4.jpeg",
  "/images/b5.jpeg",
  "/images/b6.webp",
];

const ImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    startIndex: 3,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap()); // تحديث الصورة النشطة
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // تحديث أولي
  }, [emblaApi, onSelect]);


   useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // ⏳ كل 3 ثوانٍ
    return () => clearInterval(interval);
  }, [emblaApi]);

  // التنقل عند الضغط على النقاط
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );


  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Embla Carousel Viewport */}
      <div className="overflow-hidden sm:w-[80%] max-sm:w-full h-[600px] flex items-center" ref={emblaRef}>
        <div className="flex sm:gap-[16px] sm:px-[16px]" >
          {images.map((src, index) => (
            <div key={index} className="sm:min-w-[70%] min-w-full h-[500px]">
              <img src={src} alt={`Slide ${index + 1}`} 
              className={`w-full h-full object-cover sm:rounded-lg shadow-lg transition-transform duration-500 ${
                  index === selectedIndex ? "scale-100" : "scale-90 opacity-80"
                }`}/>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute sm:left-20 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeftIcon className="sm:w-10 sm:h-10 w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute sm:right-20 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronRightIcon className="sm:w-10 sm:h-10 w-8 h-8" />
      </button>

       {/* النقاط (Dots) */}
      <div className="absolute bottom-1 hidden lg:flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-gray-900 w-4 h-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
