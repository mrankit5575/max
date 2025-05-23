 import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const courses = [
  {
    title: "Tally Prime",
    description: "Tally Prime",
    image: "/tallybusy.jpg",
    slug: "tally",
    color: "from-blue-500 to-blue-700",
    size: "md:col-span-2"
  },
  {
    title: "Basic Computer",
    description: "Learn essential computer skill.",
    image: "/basicimage.jpg",
    slug: "basic-computer",
    color: "from-purple-500 to-purple-700",
    size: "md:col-span-1"
  },
  {
    title: "Web Development",
    description: "Master the basics of web design.",
    image: "/webdesign.jpg",
    slug: "web-development",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "Data Analyst (AI Based)",
    description: "Learn data analysis with modern tools.",
    image: "/data.jpg",
    slug: "addDataAnalyst",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "Graphic Design",
    description: "Design stunning graphics and logos.",
    image: "/graphic.jpg",
    slug: "graphic",
    color: "from-green-500 to-green-700",
    size: "md:col-span-1"
  },
  {
    title: "DCA",
    description: "Diploma in Computer Applications.",
    image: "/vidoe.webp",
    slug: "dca",
    color: "from-orange-500 to-orange-700",
    size: "md:col-span-1"
  },
  {
    title: "Digital Marketing",
    description: "Become a digital marketing expert.",
    image: "/digital.jpg",
    slug: "digitalmarketing",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Advanced Excel",
    description: "Master advanced Excel features.",
    image: "/excel.jpg",
    slug: "advanced-excel",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Stock Market",
    description: "Understand how to invest smartly.",
    image: "/stock5.jpg",
    slug: "stockmarket",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "AutoCAD",
    description: "Design with precision using AutoCAD.",
    image: "/autc.jpg",
    slug: "autocad",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "Python Syllabus",
    description: "Learn Python programming step-by-step.",
    image: "/phy.jpg",
    slug: "python",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  },
  {
    title: "CCC",
    description: "NIELIT CCC Syllabus course.",
    image: "/ccc.jpg",
    slug: "cccsyllabus",
    color: "from-pink-500 to-pink-700",
    size: "md:col-span-1"
  }
];

const duplicatedCourses = [...courses, ...courses];

const CourseMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 100,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  const toggleAnimation = () => {
    if (isPaused) {
      startAnimation();
    } else {
      stopAnimation();
    }
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Featured Courses
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
          style={{ whiteSpace: "nowrap" }}
        >
          {duplicatedCourses.map((course, index) => (
            <div
              key={index}
              className="w-[300px] shrink-0 bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                <a
                  href={`/courses/${course.slug}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={toggleAnimation}
          className="px-4 py-2 bg-[#0C0950] text-white rounded-lg transition"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default CourseMarquee;
