import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo2noBG.png"
              alt="Yazzo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-semibold text-lg">Yazzo.io Oy</span>
          </div>

          {/* Contact Email */}
          <div className="flex items-center gap-2 text-gray-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link
              href="mailto:info@yazzo.io"
              className="hover:text-yazzo-400 transition-colors"
            >
              info@yazzo.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
