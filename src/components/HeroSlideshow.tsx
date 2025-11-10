"use client";

import { useEffect, useState } from "react";

export default function HeroSlideshow() {
  const slides = [
    "Yazzo — Smart Tools for Teams",
    "We build collaboration and analytics tools that help teams ship faster",
    "Transform how your team collaborates and delivers results",
    "Streamline workflows with intelligent automation and real-time insights",
    "Launching Feb 26 — Mark your calendar",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]); // Rotate through slides

  return (
    <section className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
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
    </section>
  );
}
