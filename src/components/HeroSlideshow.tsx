"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlideshow() {
  const slides = [
    {
      title: "Yazzo — Smart Tools for Teams",
      text: "We build collaboration and analytics tools that help teams ship faster.",
      cta: { label: "Products", href: "/products" },
      image: "/logoRoundedCorners.png",
    },
    {
      title: "Launching Feb 26",
      text: "Mark your calendar — our platform goes live on Feb 26.",
      cta: { label: "About", href: "/about" },
      image: "/logoRoundedCorners.png",
    },
    {
      title: "Yazzo App",
      text: "Modular apps for task automation and analytics. Try the demo when we launch.",
      cta: { label: "Team", href: "/team" },
      image: "/hero-image.png",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 lg:py-40">
        <div className="relative h-auto">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== index}
            >
              <div className="grid gap-8 lg:grid-cols-2 items-center h-full">
                <div>
                  <h2 className="text-4xl font-bold text-text-primary dark:text-text-inverse">{s.title}</h2>
                  <p className="mt-4 text-lg text-text-secondary dark:text-gray-300 max-w-xl">{s.text}</p>
                  <div className="mt-6">
                    <Link href={s.cta.href} className="inline-flex items-center rounded-md bg-yazzo-500 px-4 py-2 text-sm font-semibold text-white shadow-yazzo hover:bg-yazzo-600">
                      {s.cta.label}
                    </Link>
                  </div>
                </div>

                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  {/* If image exists, use it; Image component will fall back if missing */}
                  <Image src={s.image} alt={s.title} fill className="object-contain rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
