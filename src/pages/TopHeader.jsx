 import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TopHeader = () => {
  const motivationalLines = [
    "Empowering students with real-world skills for a brighter tomorrow.",
    "Your success is our mission.",
    "Learn from the best tutors in the industry.",
    "Building futures, one student at a time.",
    "Quality education for everyone."
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % motivationalLines.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [motivationalLines.length]);

  return (
    <div className="bg-[#0C0950]   hidden md:block text-white text-base px-4 py-3"> {/* Changed to navi-blue and larger padding */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Increased font size and spacing */}
          ISO certified
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5 md:gap-8 mb-3 md:mb-0">
            <div className="flex items-center group">
              <FaPhoneAlt className="text-white mr-3 transition-transform group-hover:scale-110 text-lg" />
              <span className="group-hover:text-gray-200 transition-colors text-[15px] md:text-[16px]">  <a href="tel:+919220958292">+91-9220958292</a>  </span>
            </div>
            <div className="flex items-center group">
              <a href='https://www.google.com/maps?q=28.7428794,77.1819009' target='_blank'> <FaMapMarkerAlt className="text-white mr-3 transition-transform group-hover:scale-110 text-lg" />
</a>
               <span className="group-hover:text-gray-200 transition-colors text-[15px] md:text-[16px]">MukundPur, Delhi</span>
            </div>
            <div className="flex items-center group">
              <FaEnvelope className="text-white mr-3 transition-transform group-hover:scale-110 text-lg" />
              <a href="mailto:maxknock90@gmail.com" className="group-hover:text-gray-200 transition-colors text-[15px] md:text-[16px]">
  maxknock90@gmail.com
</a>

             </div>
          </div>

          {/* Right Side - Larger icons and text */}
          <div className="flex items-center space-x-5">
            <span className="hidden md:inline text-gray-200 text-[15px]">Follow us:</span>
            <a href="#" className="text-white hover:text-gray-200 transition-colors transform hover:scale-125 text-lg">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/maxknock949?igsh=MWtnenRjZXdmeTAxeg==" className="text-white hover:text-gray-200 transition-colors transform hover:scale-125 text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors transform hover:scale-125 text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Motivational Line - Larger text */}
        <div className="text-center mt-3">
          <div className={`text-white text-sm md:text-[15px] transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {motivationalLines[currentLine]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;