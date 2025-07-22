import { motion } from "framer-motion";
import img from '/mximg.jpg';
import React, { useState } from "react";

export default function AboutSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    // Normalize x/y between -1 and 1
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    setMouse({ x, y });
  }

  return (
    <section
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 border-t-4 border-[#0C0950]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 border-[10px] border-black rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-red-400 opacity-20 rounded-full -z-10 blur-2xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      />

      {/* Floating Card */}
       <motion.div
  className="absolute sm:w-1/2 top-8 left-[280px] lg:left-1/3 transform -translate-x-1/2 bg-gradient-to-br from-[#0C0950] to-[#1a144e] shadow-2xl lg:p-6 rounded-xl lg:w-80 z-10 border-2 border-white/20 backdrop-blur-sm"
  initial={{ y: -40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
>
  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden rounded-xl">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white text-white"
        initial={{
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          width: Math.random() * 6 + 2,
          height: Math.random() * 6 + 2,
        }}
        animate={{
          x: Math.random() * 300 - 150,
          y: Math.random() * 300 - 150,
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>

  <div className="relative z-10 flex flex-col items-center">
    {/* Rotating Logo Container */}
    <motion.div
      className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 mb-3 flex items-center justify-center shadow-lg"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Moving Logo (replace with your logo component) */}
      <motion.div
        className="w-8 h-8"
        animate={{
          y: [0, -5, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="#0C0950" stroke="#0C0950" strokeWidth="2"/>
        </svg>
      </motion.div>
    </motion.div>

    {/* Text Content */}
    <h3 className="font-bold text-xl text-white mb-1">RAVINDRA KUMAR</h3>
    <motion.p 
      className="text-center text-yellow-200 text-sm"
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      Build your future with us!
    </motion.p>

    {/* Animated Underline */}
    <motion.div
      className="w-16 h-0.5 bg-yellow-300 mt-2"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    />
  </div>
</motion.div>   
      

      {/* Animated Colored Circles */}
      <motion.div
        className="absolute z-0 rounded-full"
        style={{
          background: '#0C0950',
          opacity: 0.18,
          width: 220,
          height: 220,
          top: `calc(30% + ${mouse.y * 30}px)`,
          left: `calc(20% + ${mouse.x * 40}px)`
        }}
        animate={{}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute z-0 rounded-full"
        style={{
          background: '#b91c1c',
          opacity: 0.16,
          width: 180,
          height: 180,
          top: `calc(55% + ${mouse.y * 40}px)`,
          left: `calc(60% + ${mouse.x * 30}px)`
        }}
        animate={{}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute z-0 rounded-full"
        style={{
          background: '#0C0950',
          opacity: 0.12,
          width: 140,
          height: 140,
          top: `calc(70% + ${mouse.y * 20}px)`,
          left: `calc(40% + ${mouse.x * 20}px)`
        }}
        animate={{}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute z-0 rounded-full"
        style={{
          background: '#ef4444',
          opacity: 0.18,
          width: 100,
          height: 100,
          top: `calc(50% + ${mouse.y * 10}px)`,
          left: `calc(35% + ${mouse.x * 10}px)`
        }}
        animate={{}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-16">
          {/* Left Side - Image with Decorative Frame */}
          <motion.div
            className="relative w-full max-w-xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="absolute -inset-4 bg-red-600 rounded-2xl -z-10 rotate-2"></div>
            <div className="absolute -inset-4 bg-[#0C0950] rounded-2xl -z-10 -rotate-2"></div>
            
            <motion.img
              src={img}
              alt="MAX Education Students"
              className="rounded-xl w-full h-auto shadow-2xl border-8 border-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating Video Button */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div> */}
            </motion.div>
          <motion.div
  className="absolute top-80 left-[150px] transform -translate-x-1/2 bg-white shadow-xl p-6 rounded-xl w-80 z-10 border-2 border-[#0C0950]"
  initial={{ y: -40, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
>
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-[#0C0950] rounded-full flex items-center justify-center mb-3">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-8 w-8 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
    </div>
    <h3 className="text-4xl font-bold text-[#0C0950] mb-2">10,000+</h3>
    <p className="text-lg font-semibold text-gray-700">Students Certified</p>
    <p className="text-sm text-gray-500 mt-1">and counting!</p>
  </div>
</motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="flex-1 mt-10 lg:mt-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <motion.p 
              className="text-blue-600 uppercase tracking-widest text-sm mb-3 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              About Us
            </motion.p>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We Have <span className="text-red-600">20+ Years of Experience</span> in Professional Education
            </motion.h2>

            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-teal-400 mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            ></motion.div>

            <motion.p 
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              One of Delhi's premier academic institutions, <strong className="text-blue-600">MAX INFOTECH</strong> was established in 2005 and registered under the Government of India. We are a professionally managed center with a proven track record of providing quality education.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                "Expert Faculty",
                "Practical Training",
                "Placement Support",
                "Modern Curriculum"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}