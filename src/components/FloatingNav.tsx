"use client";

import Link from "next/link";
import Image from "next/image";

export default function FloatingNav() {
  return (
    <nav className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-auto z-50">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-4 md:gap-6 shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2noBG.png"
            alt="Yazzo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">
          <Link
            href="/about"
            className="text-white/80 hover:text-yazzo-400 transition-colors text-xs md:text-sm font-medium"
          >
            Company
          </Link>
          <Link
            href="/team"
            className="text-white/80 hover:text-yazzo-400 transition-colors text-xs md:text-sm font-medium"
          >
            Team
          </Link>
          <Link
            href="/investors"
            className="bg-yazzo-500 hover:bg-yazzo-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors shadow-yazzo"
          >
            For Investors
          </Link>
        </div>
      </div>
    </nav>
  );
}
