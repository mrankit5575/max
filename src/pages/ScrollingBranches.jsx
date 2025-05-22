

import React, { useEffect, useRef, useState } from "react";
import { FiPhone, FiMapPin, FiPause, FiPlay } from "react-icons/fi";
 import { Link } from 'react-router-dom';

const branches = [
  { name: "Max Education Delhi  ", contact: "+91 95408 02050", address: "Office No-12, Maa Jwala Complex, Pocket 3, Badli, Samaypur, Delhi, 110042" },
  { name: "Max Education MukundPur Delhi", contact: "+91 9220958292", address: "Gali no-11 Radha Vihar MukundPur Delhi-110042" },
  { name: "Max Education Raja Vihar", contact: "+91 8882612961", address: "Q42M+73F, Raja Vihar, Samaypur, Delhi, 110042" },
  { name: "Max Education MithaPur", contact: "+91 9540903903", address: "Gali no-11 Radha Vihar MukundPur Delhi-110042" },
  { name: "Max Education (Haryana)", contact: "+91 9220958292", address: "Ward No. 11, Khasra No. 14//4, near Shiv Mandir, Gaddha Colony, chhotu ram nagar, Haryana 124507" },
  { name: "Max Education Ratanpur", contact: "+91 092191 23445", address: "824P+3G7, near S.A.H Educational school, Jalil Pur, Ratanpur, Varanasi, Uttar Pradesh 221008" },
  { name: "MAX EDUCATION HUSEPUR", contact: "+91 092191 23445", address: "Adarsh Bazar, Husepur, Ghazipur, Uttar Pradesh 233001" },
];

export default function ScrollingBranches() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("left");
  const [offset, setOffset] = useState(0);
  const [hoveredBranch, setHoveredBranch] = useState(null);

  // Speed of scrolling (pixels per frame)
  const speed = 1;

  useEffect(() => {
    let animationFrameId;

    const scrollWidth = containerRef.current?.scrollWidth || 0;
    const clientWidth = containerRef.current?.clientWidth || 0;
    const maxScroll = scrollWidth - clientWidth;

    function step() {
      if (isPaused) return;

      setOffset((prev) => {
        if (direction === "left") {
          if (prev >= maxScroll) {
            setDirection("right");
            return prev - speed;
          }
          return prev + speed;
        } else {
          if (prev <= 0) {
            setDirection("left");
            return prev + speed;
          }
          return prev - speed;
        }
      });

      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative max-w-full mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Our Branch Network</h2>
        <button
          onClick={togglePause}
          className="flex items-center gap-2 px-4 py-2 bg-[#0C0950] text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          {isPaused ? (
            <>
              <FiPlay className="text-lg" /> Resume
            </>
          ) : (
            <>
              <FiPause className="text-lg" /> Pause
            </>
          )}
        </button>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div
          ref={containerRef}
          className="flex gap-8 py-4 transition-transform duration-1000 ease-linear"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredBranch === idx ? "transform scale-105 shadow-xl" : ""
              }`}
              onMouseEnter={() => setHoveredBranch(idx)}
              onMouseLeave={() => setHoveredBranch(null)}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full text-green-600">
                    <FiMapPin className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{branch.name}</h3>
                </div>
                
                <div className="space-y-3 pl-16">
                  <div className="flex items-center gap-3">
                    <FiPhone className="text-gray-500" />
                    <a 
                      href={`tel:${branch.contact}`} 
                      className="text-red-600 hover:text-blue-800 hover:underline"
                    >
                      {branch.contact}
                    </a>
                  </div>
                  
                  <p className="text-gray-600 text-sm flex items-start gap-3">
                    <span className="inline-block mt-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </span>
                    <span>{branch.address}</span>
                  </p>
                </div>
                <Link to="/branches">
                <button className="mt-6 w-full py-2 bg-[#0C0950] text-white rounded-lg hover:bg-red-600 transition-colors font-medium">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {branches.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(offset / 300) % branches.length === idx
                ? "bg-blue-600 w-6"
                : "bg-gray-300"
            }`}
            onClick={() => {
              setOffset(idx * 300);
              setIsPaused(true);
            }}
            aria-label={`Go to branch ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}