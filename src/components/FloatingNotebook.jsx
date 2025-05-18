import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingNotebook = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const notebookRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) { // Only on desktop
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 20;
        const y = (clientY / window.innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block fixed top-20 right-20 z-50 pointer-events-none">
      <motion.div
        ref={notebookRef}
        className="relative"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          rotate: mousePosition.x * 0.5
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10
        }}
      >
        {/* Notebook */}
        <motion.div
          className="w-24 h-32 bg-white rounded-lg shadow-xl"
          style={{
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
            transformStyle: "preserve-3d"
          }}
          animate={{
            rotateX: [0, 5, 0],
            rotateY: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Notebook Lines */}
          <div className="absolute inset-0 p-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-0.5 bg-blue-100 mb-3"
                style={{ marginTop: `${i * 12}px` }}
              />
            ))}
          </div>
          {/* Notebook Spiral */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-200 rounded-l-lg" />
        </motion.div>

        {/* Pen */}
        <motion.div
          className="absolute -right-4 top-1/2 w-16 h-4 bg-red-500 rounded-full"
          style={{
            transform: "rotate(45deg)",
            transformOrigin: "left center"
          }}
          animate={{
            rotate: [45, 50, 45],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full" />
        </motion.div>

        {/* Sparkle Effects */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="text-yellow-400">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingNotebook; 