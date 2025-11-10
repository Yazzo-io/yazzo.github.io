"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const slides = [
    {
      text: "Discover local events and dining in real-time — right on your map",
      textPosition: "top-1/4",
      logoPosition: "bottom-1/4",
    },
    {
      text: "Turn empty seats into opportunities with instant offers",
      textPosition: "top-1/3",
      logoPosition: "bottom-1/3",
    },
    {
      text: "Real-time deals for spontaneous experiences near you",
      textPosition: "top-1/2",
      logoPosition: "bottom-1/2",
    },
    {
      text: "Fill venues, reduce waste, support local culture",
      textPosition: "top-2/3",
      logoPosition: "bottom-1/4",
    },
    {
      text: "Launching February 26, 2026 in Helsinki",
      textPosition: "top-1/2",
      logoPosition: "bottom-1/3",
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
          <div className={`absolute left-0 right-0 ${slide.textPosition} px-6`}>
            <div className="mx-auto max-w-5xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                {slide.text}
              </h1>
            </div>
          </div>

          {/* Logo with glow effect */}
          <div className={`absolute left-1/2 -translate-x-1/2 ${slide.logoPosition}`}>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-50 bg-yazzo-500 rounded-full"></div>
              <Image
                src="/logoRoundedCorners.png"
                alt="Yazzo Logo"
                width={200}
                height={200}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
