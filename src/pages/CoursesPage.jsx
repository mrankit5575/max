 import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);

const courses = [
  {
    title: "Tally Prime",
    description: "Master accounting with Tally Prime, GST, and billing.",
    image: "/tallyprime.webp",
    slug: "tally",
    color: "from-blue-500 to-blue-700",
    size: "md:col-span-2" // Wider card
  },
  {
    title: "Basic Computer",
    description: "Learn fundamental computer operations and MS Office.",
    image: "/basic.webp",
    slug: "basic-computer",
    color: "from-purple-500 to-purple-700",
    size: "md:col-span-1"
  },
  {
    title: "Web Development",
    description: "Build websites with HTML, CSS, JavaScript, and React.",
    image: "/web.webp",
    slug: "web-development",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "DCA",
    description: "Diploma in Computer Applications with practical training.",
    image: "/vidoe.webp",
    slug: "dca",
    color: "from-orange-500 to-orange-700",
    size: "md:col-span-1"
  },
  {
    title: "Photoshop",
    description: "Learn professional graphic design and photo editing.",
    image: "/photoshape.webp",
    slug: "photoshop",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Video Editing",
    description: "Master Premiere Pro and Filmora for video production.",
    image: "/vidoe.webp",
    slug: "video-editing",
    color: "from-red-500 to-red-700",
    size: "md:col-span-2" // Wider card
  },
  { 
    title: "Animation",
    description: "2D/3D animation using industry-standard tools.",
    image: "/tallyprime.webp",
    slug: "animation",
    color: "from-indigo-500 to-indigo-700",
    size: "md:col-span-1"
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div 
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-gray-100 z-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.05, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            MAX EDUCATION
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transform Your Career With <span className="text-red-600">Our Courses</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Professional training designed to make you industry-ready
          </motion.p>
        </motion.div>

        {/* Asymmetrical Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className={`${course.size} h-full`}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                
                {/* Course Image */}
                <motion.div 
                  className="relative overflow-hidden h-48"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-lg">{course.title}</span>
                  </div>
                </motion.div>
                
                {/* Course Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
                  
                  <MotionLink
  to={`/courses/${course.slug}`}
  className={`flex items-center font-medium text-white py-2 px-4 rounded-lg bg-gradient-to-r ${course.color} self-start`}
  whileHover={{ 
    x: 5,
    scale: 1.05
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Explore Course
  <ArrowRightIcon className="w-4 h-4 ml-2" />
</MotionLink> 
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-100 opacity-10 -z-10"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-100 opacity-10 -z-10"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
    </div>
  );
};

export default CoursesPage;