 import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGlobe, FaChalkboardTeacher, FaAward } from "react-icons/fa";

const teachers = [
  {
    name: "Manoj Kumar",
    title: "CEO | 20 Yrs Stock Market",
    image: "/sir.avif",
    experience: "20+ years",
    expertise: ["Stock Market", "Investment Strategies", "Portfolio Management"],
  },
  {
    name: "Chaitali",
    title: "Accounting Management",
    image: "/mentor2png.png",
    experience: "12+ years",
    expertise: ["Financial Accounting", "Taxation", "Auditing"],
  },
  {
    name: "Ravindra",
    title: "Accounting & Graphics Expert",
    image: "/sir2.png",
    experience: "6+ years",
    expertise: ["Accounting Software", "Graphic Design", "Branding"],
  },
  {
    name: "Yogesh",
    title: "Web Developer & Designer",
    image: "/mentor.png",
    experience: "5+ years",
    expertise: ["Web Development", "UI/UX Design", "Frontend Technologies"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function TeacherSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Industry Expert <span className="text-[#0C0950]">Faculty</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#0C0950] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from certified professionals with 10+ years of industry experience and proven
            teaching excellence.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0C0950]/5 to-blue-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="p-6 flex flex-col items-center relative z-10">
                <div className="relative mb-5">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-[#0C0950] opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1 text-center group-hover:text-[#0C0950] transition-colors duration-300">
                  {teacher.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3 text-center">
                  {teacher.title}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaChalkboardTeacher className="mr-2 text-[#0C0950]" />
                  <span>{teacher.experience} experience</span>
                </div>
                
                <div className="mb-4 text-center">
                  {teacher.expertise.map((skill, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full mr-1 mb-2 transition-all duration-200 hover:bg-[#0C0950] hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-2">
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-[#0C0950] transition-colors duration-300 p-2 rounded-full bg-gray-50 hover:bg-gray-100"
                    aria-label={`${teacher.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-[#0C0950] transition-colors duration-300 p-2 rounded-full bg-gray-50 hover:bg-gray-100"
                    aria-label={`${teacher.name}'s Portfolio`}
                  >
                    <FaGlobe className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#0C0950] to-blue-800 rounded-xl p-8 shadow-xl text-white overflow-hidden relative"
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-white/5 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-4">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <FaAward className="text-3xl text-yellow-300" />
              </motion.div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Learn From Our Experts?</h3>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Our faculty members bring real-world experience directly to your learning journey. 
              They don't just teach concepts - they share practical insights from decades of 
              professional work in their respective fields.
            </p>
             
          </div>
        </motion.div>

        {/* Testimonials Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-800">What Our Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Student {item}</h4>
                    <p className="text-sm text-gray-500">Course Taken</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The instructors here have transformed my career with their practical approach 
                  and industry insights. Highly recommended!"
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}