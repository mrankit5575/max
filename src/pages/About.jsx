import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlayCircle, FiX } from 'react-icons/fi';
          //  import { FiPlayCircle } from "react-icons/fi";

const mainImage = "/img21.jpg";
const videoThumbnail = "/img20.jpg";
const videoSrc = "/video.mp4";

const AboutUsSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Normalize x/y between -1 and 1
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    setMouse({ x, y });
  }

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-t-4 border-b-4 "
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* Decorative Shape Groups - Top Left (Column) */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4"
        style={{ top: '30px', left: '30px', gap: '15px' }}
        animate={{
          x: mouse.x * 18,
          y: mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        {/* Triangle */}
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#ef4444" />
        </svg>
        {/* Square */}
        <div className="w-16 h-16 bg-[#0C0950] rounded-md"></div>
        {/* Circle */}
        <div className="w-16 h-16 bg-[#facc15] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Top Left (Row) - Positioned relative to corner with offset */}
      <motion.div
        className="absolute z-0 flex flex-row items-center"
        style={{ top: '30px', left: '150px', gap: '10px' }}
        animate={{
          x: mouse.x * 22,
          y: mouse.y * 15
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
      >
        {/* Triangle */}
        <svg width="20" height="20" className="md:w-70 md:h-70">
          <polygon points="10,0 20,20 0,20" fill="#0C0950" />
        </svg>
        {/* Square */}
        <div className="w-5 h-5 bg-[#ef4444] rounded-md md:w-20 md:h-20"></div>
        {/* Circle */}
        <div className="w-5 h-5 bg-[#facc15] rounded-full md:w-20 md:h-20"></div>
      </motion.div>

      {/* Decorative Shape Groups - Top Right (Column) */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4 items-end"
        style={{ top: '30px', right: '30px', gap: '15px' }}
        animate={{
          x: -mouse.x * 18,
          y: mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#0C0950" />
        </svg>
        <div className="w-16 h-16 bg-[#ef4444] rounded-md"></div>
        <div className="w-16 h-16 bg-[#facc15] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Top Right (Row) - Positioned relative to corner with offset */}
      <motion.div
        className="absolute z-0 flex flex-row gap-2 items-center"
        style={{ top: '30px', right: '150px', gap: '10px' }}
        animate={{
          x: -mouse.x * 22,
          y: mouse.y * 15
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
      >
         {/* Triangle */}
         <svg width="20" height="20" className="md:w-70 md:h-70">
          <polygon points="10,0 20,20 0,20" fill="#ef4444" />
        </svg>
        {/* Square */}
        <div className="w-5 h-5 bg-[#0C0950] rounded-md md:w-20 md:h-20"></div>
        {/* Circle */}
        <div className="w-5 h-5 bg-[#facc15] rounded-full md:w-20 md:h-20"></div>
      </motion.div>

      {/* Decorative Shape Groups - Bottom Right (Column) */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4 items-end"
        style={{ bottom: '30px', right: '30px', gap: '15px' }}
        animate={{
          x: -mouse.x * 18,
          y: -mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#facc15" />
        </svg>
        <div className="w-16 h-16 bg-[#0C0950] rounded-md"></div>
        <div className="w-16 h-16 bg-[#ef4444] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Bottom Right (Row) - Positioned relative to corner with offset */}
      <motion.div
        className="absolute z-0 flex flex-row gap-2 items-center"
        style={{ bottom: '30px', right: '150px', gap: '10px' }}
        animate={{
          x: -mouse.x * 22,
          y: -mouse.y * 15
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
      >
         {/* Triangle */}
         <svg width="20" height="20" className="md:w-70 md:h-70">
          <polygon points="10,0 20,20 0,20" fill="#facc15" />
        </svg>
        {/* Square */}
        <div className="w-5 h-5 bg-[#0C0950] rounded-md md:w-20 md:h-20"></div>
        {/* Circle */}
        <div className="w-5 h-5 bg-[#ef4444] rounded-full md:w-20 md:h-20"></div>
      </motion.div>

      {/* Logo in Border (Desktop) */}
      <motion.div
        className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 rounded-b-lg shadow-md z-30 border-l-4 border-r-4 border-b-4 border-[#0C0950]"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-[#0C0950] font-bold mt-10 text-lg uppercase tracking-wider">About Us</span>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <motion.img
              src={mainImage}
              alt="MAX Education"
              className="rounded-xl shadow-2xl w-full h-auto max-w-2xl mx-auto border-8 border-[#0C0950]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Video Thumbnail with Play Button */}

<motion.div
  className="absolute -bottom-6 -right-6  w-40 h-40 md:w-64 md:h-64 shadow-2xl rounded-xl overflow-hidden cursor-pointer border-4 bg-[#0C0950]"
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  onClick={() => setShowVideoModal(true)}
>
  <img
    src={videoThumbnail}
    alt="Video Thumbnail"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    {/* Wave Animation */}
    <span className="absolute w-16 h-16 rounded-full bg-red-500 opacity-75 animate-ping"></span>

    {/* Play Button */}
    <div className="w-16 h-16 bg-[#0C0950] rounded-full flex items-center justify-center z-10">
      <FiPlayCircle className="h-8 w-8 text-white ml-1" />
    </div>
  </div>
</motion.div>

          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-sm text-red-600  font-semibold tracking-widest mb-4 uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h4>

            <motion.h2
              className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Learn & Grow <span className="text-white">Your</span> Skills From <span className="text-red-600">MAX Education</span>
            </motion.h2>

            <motion.div
              className="w-24 h-1.5 bg-[#0C0950] rounded-full mb-8 mx-auto lg:mx-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              We're here to support you in reaching your goals and growing your career. Our energetic team of digital marketing pros and development teachers is ready to help. At MAX, we believe in putting our students first — always.
            </motion.p>

            {/* Features List */}
            <motion.ul
              className="space-y-4 text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                "Expert Trainers",
                "Career Oriented Courses",
                "Always Available",
                "Practical Training",
                "Placement Support"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#0C0950] mt-1 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                aria-label="Close video modal"
              >
                <FiX className="h-8 w-8" />
              </button>
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutUsSection;
