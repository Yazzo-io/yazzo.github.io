"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const slides = [
    {
      text: "Discover local events and dining in real-time — right on your map",
      textPosition: "top-8 left-8",
      logoPosition: "bottom-12 right-12",
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Turn empty seats into opportunities with instant offers",
      textPosition: "top-1/2 -translate-y-1/2 right-8",
      logoPosition: "top-1/2 -translate-y-1/2 left-8",
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Real-time deals for spontaneous experiences near you",
      textPosition: "bottom-12 left-8",
      logoPosition: "top-12 right-8",
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Fill venues, support local culture",
      textPosition: "top-12 right-8",
      logoPosition: "bottom-8 left-12",
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Launching February 26, 2026 in Helsinki",
      textPosition: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
      logoPosition: "bottom-8 left-1/2 -translate-x-1/2",
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
    <section className="relative isolate overflow-hidden min-h-screen">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          {/* Text */}
          <div className={`absolute ${slide.textPosition} max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {slide.text}
            </h1>
          </div>

          {/* Logo with glow effect */}
          <div className={`absolute ${slide.logoPosition}`}>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-50 bg-yazzo-500 rounded-full"></div>
              <Image
                src={slide.logoSrc}
                alt="Yazzo Logo"
                width={120}
                height={120}
                className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
