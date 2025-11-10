"use client";

import { useState } from "react";
import FloatingNav from "../../components/FloatingNav";

export default function Investors() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Update this based on your actual PDF page count

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <FloatingNav />

      <div className="pt-24 pb-20 px-4 mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">
            Investor Pitch Deck
          </h1>
          <p className="text-gray-300">
            Discover how Yazzo is transforming local experiences
          </p>
        </div>

        {/* PDF Slideshow */}
        <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8">
          {/* PDF Viewer */}
          <div className="relative w-full aspect-[16/9] bg-white rounded-lg overflow-hidden mb-6">
            <iframe
              key={currentPage}
              src={`/Yazzo_pitch_deck_with_logo.pdf#page=${currentPage}&view=FitH`}
              className="w-full h-full"
              title={`Pitch Deck - Page ${currentPage}`}
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-yazzo-500 hover:bg-yazzo-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
            >
              Previous
            </button>

            <div className="text-white font-medium">
              Page {currentPage} of {totalPages}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-yazzo-500 hover:bg-yazzo-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
            >
              Next
            </button>
          </div>

          {/* Download Link */}
          <div className="mt-6 text-center">
            <a
              href="/Yazzo_pitch_deck_with_logo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Pitch Deck
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
