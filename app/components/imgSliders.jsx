"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/images/b7.webp", "/images/b8.webp", "/images/b9.webp", "/images/b10.webp",
  "/images/b11.webp", "/images/b12.webp", "/images/b14.webp", "/images/b15.webp",
  "/images/b16.webp", "/images/b17.webp", "/images/b18.webp", "/images/b19.webp",
  "/images/b20.webp", "/images/b21.webp", "/images/b22.webp", "/images/b1.webp",
  "/images/b2.webp", "/images/b3.webp", "/images/b4.webp"
];

const ImageSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    startIndex: 3,
    containScroll: "keepSnaps",
    draggable: true,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi?.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center">
      <div className="overflow-hidden sm:w-[80%] max-sm:w-full h-[600px] flex items-center" ref={emblaRef}>
        <div className="flex sm:gap-[16px] sm:px-[16px]">
          {images.map((src, index) => (
            <div key={index} className="sm:min-w-[70%] min-w-full h-[500px]">
              <img 
                src={src} 
                alt={`Slide ${index + 1}`} 
                className={`w-full h-full object-cover sm:rounded-lg shadow-lg transition-transform duration-500 ${
                  selectedIndex === index ? "scale-100" : "scale-95 opacity-70"
                }`} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute sm:left-20 left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg"
      >
        <ChevronLeftIcon className="sm:w-10 sm:h-10 w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute sm:right-20 right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg"
      >
        <ChevronRightIcon className="sm:w-10 sm:h-10 w-8 h-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 hidden lg:flex items-center gap-2">
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
