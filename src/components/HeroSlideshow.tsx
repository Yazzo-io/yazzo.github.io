"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const slides = [
    "Discover local events and dining in real-time — right on your map",
    "Turn empty seats into opportunities with instant offers",
    "Real-time deals for spontaneous experiences near you",
    "Fill venues, reduce waste, support local culture",
    "Launching February 26, 2026 in Helsinki",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]); // Rotate through slides

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative h-40">
          {slides.map((text, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out flex items-center justify-center ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                {text}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Logo with glow effect */}
      <div className="mt-16 relative">
        <div className="absolute inset-0 blur-3xl opacity-50 bg-yazzo-500 rounded-full"></div>
        <Image
          src="/logoRoundedCorners.png"
          alt="Yazzo Logo"
          width={200}
          height={200}
          className="relative z-10"
        />
      </div>
    </section>
  );
}
