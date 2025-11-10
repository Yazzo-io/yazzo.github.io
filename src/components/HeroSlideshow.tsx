"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const slides = [
    {
      text: "Discover local events and dining in real-time — right on your map",
      textClass: "top-16 left-1/2 -translate-x-1/2 md:top-[15%] md:left-[8%] md:translate-x-0",
      logoClass: "bottom-20 left-1/2 -translate-x-1/2 md:bottom-[20%] md:right-[12%] md:left-auto md:translate-x-0",
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Turn empty seats into opportunities with instant offers",
      textClass: "top-16 left-1/2 -translate-x-1/2 md:top-[35%] md:right-[10%] md:left-auto md:translate-x-0",
      logoClass: "bottom-16 left-1/2 -translate-x-1/2 md:top-[40%] md:bottom-auto md:left-[15%] md:translate-x-0",
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Real-time deals for spontaneous experiences near you",
      textClass: "top-16 left-1/2 -translate-x-1/2 md:bottom-[25%] md:top-auto md:left-[10%] md:translate-x-0",
      logoClass: "bottom-20 left-1/2 -translate-x-1/2 md:top-[18%] md:bottom-auto md:right-[18%] md:left-auto md:translate-x-0",
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Fill venues, support local culture",
      textClass: "top-20 left-1/2 -translate-x-1/2 md:top-[20%] md:right-[12%] md:left-auto md:translate-x-0",
      logoClass: "bottom-16 left-1/2 -translate-x-1/2 md:bottom-[15%] md:left-[20%] md:translate-x-0",
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Launching February 26, 2026 in Helsinki",
      textClass: "top-1/3 left-1/2 -translate-x-1/2 md:top-[30%]",
      logoClass: "bottom-1/3 left-1/2 -translate-x-1/2 md:bottom-[12%]",
      logoSrc: "/logo1noBG.png",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]); // Rotate through slides

  return (
    <section className="relative isolate overflow-hidden h-screen max-h-screen">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          {/* Text */}
          <div className={`absolute ${slide.textClass} max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center md:text-left">
              {slide.text}
            </h1>
          </div>

          {/* Logo with glow effect */}
          <div className={`absolute ${slide.logoClass}`}>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-50 bg-yazzo-500 rounded-full"></div>
              <Image
                src={slide.logoSrc}
                alt="Yazzo Logo"
                width={100}
                height={100}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
