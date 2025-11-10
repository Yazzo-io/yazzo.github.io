"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const slides = [
    {
      text: "Discover local events and dining in real-time — right on your map",
      textPosition: { desktop: "top-[15%] left-[8%]", mobile: "top-12" },
      logoPosition: { desktop: "bottom-[20%] right-[12%]", mobile: "bottom-16" },
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Turn empty seats into opportunities with instant offers",
      textPosition: { desktop: "top-[35%] right-[10%]", mobile: "top-16" },
      logoPosition: { desktop: "top-[40%] left-[15%]", mobile: "bottom-12" },
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Real-time deals for spontaneous experiences near you",
      textPosition: { desktop: "bottom-[25%] left-[10%]", mobile: "top-12" },
      logoPosition: { desktop: "top-[18%] right-[18%]", mobile: "bottom-16" },
      logoSrc: "/logo1noBG.png",
    },
    {
      text: "Fill venues, support local culture",
      textPosition: { desktop: "top-[20%] right-[12%]", mobile: "top-20" },
      logoPosition: { desktop: "bottom-[15%] left-[20%]", mobile: "bottom-12" },
      logoSrc: "/logo2noBG.png",
    },
    {
      text: "Launching February 26, 2026 in Helsinki",
      textPosition: { desktop: "top-[30%] left-1/2 -translate-x-1/2", mobile: "top-1/3" },
      logoPosition: { desktop: "bottom-[12%] left-1/2 -translate-x-1/2", mobile: "bottom-1/3" },
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
    <section className="relative isolate overflow-hidden h-screen">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          {/* Text */}
          <div className={`absolute left-1/2 -translate-x-1/2 ${slide.textPosition.mobile} md:left-auto md:top-auto md:-translate-x-0 md:${slide.textPosition.desktop} max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center md:text-left">
              {slide.text}
            </h1>
          </div>

          {/* Logo with glow effect */}
          <div className={`absolute left-1/2 -translate-x-1/2 ${slide.logoPosition.mobile} md:left-auto md:top-auto md:bottom-auto md:-translate-x-0 md:${slide.logoPosition.desktop}`}>
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
