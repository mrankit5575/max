 import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// const MotionLink = motion(Link);
const MotionLink = motion.create(Link); // ✅ Updated way


const courses = [
  {
    title: "Tally Prime",
    description: "Master accounting with Tally Prime, GST, inventory, payroll, and BUSY software",
    image: "/tallybusy.jpg",
    slug: "tally",
    color: "from-blue-500 to-blue-700",
    size: "md:col-span-2" // Wider card
  },
  {
    title: "Basic Computer",
    description: "Learn essential computer skills including Office tools, Internet, Cyber Safety, and AI basics ",
    image: "/basicimage.jpg",
    slug: "basic-computer",
    color: "from-purple-500 to-purple-700",
    size: "md:col-span-1"
  },
  {
    title: "Web Development",
     image: "/webdesign.jpg",
    slug: "web-development",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "Data Analyst (AI Based)",
    description: "Learn data analysis with modern tools like Excel, SQL, Power BI/Tableau, and Python. Perfect for aspiring .",
    image: "/data.jpg",
    slug: "addDataAnalyst",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "Graphic Design ",
    description: "Build websites with HTML, CSS, JavaScript, and React.",
    image: "/graphic.jpg",
    slug: "graphic",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "DCA",
      description: "Master computer fundamentals, office tools, accounting, design, programming, and more in this comprehensive ADCA course.",

     image: "/vidoe.webp",
    slug: "dca",
    color: "from-orange-500 to-orange-700",
    size: "md:col-span-1"
  },
  {
    title: "Digital Marketing",
    description: "Learn the essentials of digital marketing including SEO, SEM, SMM, content, email marketing, and web analytics. Perfect for aspiring marketers.",
    image: "/digital.jpg",
    slug: "digitalmarketing",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Advanced Excel",
       description: "Master advanced Excel .",

     image: "/excel.jpg",
    slug: "digitalmarketingdfskfjskfjslkjfsjdf",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Stock Market",
      description: "Understand how the stock market works, master trading strategies, and learn both fundamental and technical analysis. Perfect for beginners and aspiring investors.",

     image: "/stock5.jpg",
    slug: "stockmarket",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "AutoCAD Syllabus",
      description: "Master 2D and basic 3D drafting using AutoCAD. Learn professional drawing, editing, layer management, and plotting techniques for real-world architectural and mechanical design.",

     image: "/autc.jpg",
    slug: "autocardcourse",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Python Syllabus",
    description: "    This Python course is ideal for beginners and aspiring developers. It covers everything from syntax and data types to object-oriented programming and popular libraries like NumPy and Pandas. By the end, students will be able to build small applications and scripts with confidence.",

    image: "/phy.jpg",
    slug: "phythonfjkfjsklfjlfsjflasf",
    color: "from-pink-500 to-pink-700",
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