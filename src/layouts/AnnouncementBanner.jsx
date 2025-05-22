// components/AnnouncementBanner.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion'; // ✅ fixed import

export default function AnnouncementBanner() {
  const [announcement, setAnnouncement] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await axios.get('https://maxbackend.onrender.com/api/announcements');
        if (res.data && Object.keys(res.data).length > 0) {
          setAnnouncement(res.data);
        } else {
          setAnnouncement(null);
        }
      } catch (err) {
        console.error("Failed to fetch announcement:", err);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!announcement || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-red-500 border-l-4 border-[#0C0950] text-white p-6 rounded-lg shadow-lg mb-6 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
        
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-xl mb-2 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2 text-red-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" 
                />
              </svg>
              {announcement.title}
            </h2>
            <p className="text-gray-200">{announcement.message}</p>
          </div>
          
          <motion.button
            onClick={handleClose}
            className="text-gray-300 hover:text-white ml-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close announcement"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </motion.button>
        </div>
        
        <motion.div
          className="absolute bottom-2 right-2 flex space-x-1"
          animate={{ 
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
