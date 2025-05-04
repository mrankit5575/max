import { useEffect, useRef, useState } from "react";
import Tutors from "./Tutors";
import Counter from "../components/Counter";
import img from '../assets/img2.jpg';
import { Link } from "react-router-dom";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import BecomeATutor from "../components/BecomeATutor";
import Support from "../components/Support";
import FounderSection from "../components/FounderSection";
import ForParentsSection from "../components/ForParentsSection";

export default function Home() {
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Trigger once
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

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
      
      {/* Text Section */}
      <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Empower Your <span className="text-blue-600">Learning Journey</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
          Personalized tutoring by expert educators. Unlock your potential with our curated programs designed for academic success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            to="/tutor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium"
          >
            Find a Tutor
          </Link>
          <Link
            to="/services"
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium"
          >
            Our Programs
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
        >
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <Counter targetNumber={100} suffix="+" startCounting={startCounting} />
            <div className="text-gray-600 text-sm">Expert Tutors</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <Counter targetNumber={100} suffix="+" startCounting={startCounting} />
            <div className="text-gray-600 text-sm">Students Helped</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <Counter targetNumber={95} suffix="%" startCounting={startCounting} />
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 order-1 lg:order-2 relative flex justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md w-full">
          <img
            // src="https://images.unsplash.com/photo-1600195077070-bfd08f2c5be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            src = {img}
            alt="Professional Tutor"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-blue-600/10 rounded-2xl"></div>
        </div>

        {/* Floating card */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg hidden md:block w-64">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-gray-900">Certified Tutors</div>
              <div className="text-sm text-gray-600">Verified professionals</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <Features/>
          <Tutors />
          <Categories/>     
          <Testimonials/>
          <ForParentsSection/>
          <BecomeATutor/>
          <FounderSection/>
          <Support/>
      {/* Tutors Section */}
      
    </div>
  );
}
