import { useEffect, useRef, useState } from "react";
import Tutors from "./Tutors";
import Counter from "../components/Counter";
import img from "../assets/img2.jpg";
import { Link } from "react-router-dom";
import Features from "../components/Features";
// import Categories from "../components/Categories"; ;last edit 2025`
import Testimonials from "../components/Testimonials";
import BecomeATutor from "../components/BecomeATutor";
import Support from "../components/Support";
import FounderSection from "../components/FounderSection";
import ForParentsSection from "../components/ForParentsSection";
import { motion, AnimatePresence } from "framer-motion";
import CoursesPage from "./CoursesPage";
import FeatureCards from "./FeatureCards";
import ParticleAnimation from "./ParticleAnimation";
import AboutUsSection from "./About";
import BannerWithAnimation from "../layouts/BannerWithAnimation ";
import InstagramGallery from "../layouts/Gallery";
import FloatingHomeIcon from "../layouts/Follting";
import AboutSection from "../layouts/AboutSection"; 
import AnnouncementBanner from "../layouts/AnnouncementBanner";
import Gallery from "../components/Photo";
 // import ChatBot from "../layouts/ChetBoat";

const changingTexts = [
    "Personalized tutoring by expert educators.",
    "Unlock your potential with curated programs.",
    "Join us to achieve academic success."
];

export default function Home() {
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % changingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mobile animation sequence
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const timer = setTimeout(() => setAnimationStep(1), 1000);
      const timer2 = setTimeout(() => setAnimationStep(2), 2000);
      const timer3 = setTimeout(() => setAnimationStep(3), 3000);
      const timer4 = setTimeout(() => setAnimationStep(4), 4000);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        {/* <getBotReply/<> */}
        <FloatingHomeIcon/>
         {/* <ChatBot/> */}
        {/* <ParticleAnimation/> */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">

              <AnnouncementBanner/>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
              {/* Text Section - Mobile sequence */}
               <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                {/* 20+ Years Experience - Step 1 */}
                <AnimatePresence>
                  {(animationStep >= 0 || window.innerWidth > 768) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-2xl sm:text-3xl font-bold text-yellow px-4 py-2 rounded-lg shadow-md inline-block"
                    >
                      <Counter targetNumber={20} startCounting={true} />
                      <span className="text-lg sm:text-xl text-red-500">+ Years Experience</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Title - Step 2 */}
                <AnimatePresence>
                  {(animationStep >= 1 || window.innerWidth > 768) && (
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                    >
                      <span className="block">MAX Education</span>
                      <span className="block text-red-500">Computer Institute</span>
                    </motion.h1>
                  )}
                </AnimatePresence>

                {/* Changing Text - Step 3 */}
                <AnimatePresence>
                  {(animationStep >= 2 || window.innerWidth > 768) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="h-20 flex items-center justify-center lg:justify-start"
                    >
                      <p className="text-base sm:text-lg md:text-xl text-gray-600">
                        {changingTexts[textIndex]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons - Step 4 */}
                <div className="hidden lg:block md:block">

                <AnimatePresence >
                  {(animationStep >= 3 || window.innerWidth > 768) && (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                    >
                      <Link
                        to="/courses"
                        className="bg-[#0C0950] hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm sm:text-base"
                        >
                         Courses
                      </Link>
                      <Link
                        to="/services"
                        className="border-2 border-red-600 text-blue-600 hover:bg-blue-50 px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium text-sm sm:text-base"
                        >
                        {/* Our Programs */}
                        Get Started
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                  </div>

                {/* Free Trial - Step 5 */}
                <div>
                  
                </div>
                
              </div>

              {/* Image Section - Only shown after text on mobile */}
              <motion.div 
                className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0"
                initial={{ opacity: window.innerWidth <= 768 ? 0 : 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: window.innerWidth <= 768 ? 1.5 : 0 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full max-w-md group">
                  <img
                    src={img}
                    alt="Professional Tutor"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-blue-600/10 rounded-2xl"></div>
                  
                  {/* Flash/Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 sm:p-4 rounded-xl shadow-lg hidden md:block w-56 sm:w-64">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-blue-100 p-1 sm:p-2 rounded-full">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">Certified Tutors</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Verified professionals</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats - Only shown after image on mobile */}
            <div className="lg:hidden mt-20">

            <AnimatePresence  >
                  {(animationStep >= 3 || window.innerWidth > 768) && (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                    >
                      <Link
                        to="/tutor"
                        className="bg-[#0C0950] hover:bg-blue-700 text-white px-6 py-2 sm:px-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm sm:text-base"
                        >
                        Courses
                      </Link>
                      <Link
                        to="/services"
                        className="border-2 border-red-600 text-Black hover:bg-blue-50 px-2 py-2 sm:px-8 sm:py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium text-sm sm:text-base"
                        >
                        Get Started
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
                  </div>
            <motion.div
              ref={statsRef}
              initial={{ opacity: window.innerWidth <= 768 ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: window.innerWidth <= 768 ? 2 : 0 }}
              className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm text-center">
                <Counter targetNumber={100} suffix="+" startCounting={startCounting} />
                <div className="text-gray-600 text-xs sm:text-sm">Expert Tutors</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm text-center">
                <Counter targetNumber={100} suffix="+" startCounting={startCounting} />
                <div className="text-gray-600 text-xs sm:text-sm">Students Helped</div>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm text-center">
                <Counter targetNumber={95} suffix="%" startCounting={startCounting} />
                <div className="text-gray-600 text-xs sm:text-sm">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Sections */}
        <FeatureCards/>
        <Features />
        <AboutSection/>
        <CoursesPage />
        <AboutUsSection/>
        <Gallery/>
        <BannerWithAnimation/>
         <Testimonials />
         <InstagramGallery/>
         
      </div>
    </div>
  );
}