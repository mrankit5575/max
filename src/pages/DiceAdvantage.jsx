 import { useState } from 'react';
import { FaThumbsUp, FaChalkboardTeacher, FaLaptopCode, FaBriefcase, FaBuilding, FaCheckCircle } from 'react-icons/fa';

const tabs = [
  {
    title: 'Industry-ready Curriculum',
    icon: <FaCheckCircle className="mr-2" />,
    content: (
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">INDUSTRY–READY CURRICULUM</h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-yellow-500 mt-1 mr-2">●</span>
            <div>
              <span className="font-semibold text-gray-900">Expert-made, expert-vetted:</span>{' '}
              Designed by industry veterans and vetted by industry experts, our curriculum only includes the topics and skills that the industry demands.
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-500 mt-1 mr-2">●</span>
            <div>
              <span className="font-semibold text-gray-900">Regular audit:</span>{' '}
              We regularly audit our course and delivery to keep it relevant to the ever-changing industry trends and practices.
            </div>
          </li>
        </ul>
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">16</p>
            <p className="text-sm font-medium text-gray-600">COURSES</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">6</p>
            <p className="text-sm font-medium text-gray-600">MONTHS DURATION</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-sm font-medium text-gray-600">CLASSES/WEEK</p>
          </div>
        </div>
        <div className="mt-6">
          
          {/* <a 
            href="https://www.dice-academy.com/courses" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Explore our courses
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>
    ),
  },
  {
    title: 'Industry-trained Mentors',
    icon: <FaChalkboardTeacher className="mr-2" />,
    content: (
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">INDUSTRY-TRAINED MENTORS</h3>
        <div className="space-y-4 text-gray-700">
          <p>
            Our instructors are seasoned professionals who have worked with top companies like Google, Amazon, and Microsoft. 
            They bring real-world experience and practical insights directly into the classroom.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2">✓</span>
              <span>10+ years average industry experience</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2">✓</span>
              <span>Hands-on project guidance</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mt-1 mr-2">✓</span>
              <span>1:1 mentorship sessions</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Assisted Portfolio Building',
    icon: <FaLaptopCode className="mr-2" />,
    content: (
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">ASSISTED PORTFOLIO BUILDING</h3>
        <div className="space-y-4 text-gray-700">
          <p>
            We don't just teach skills - we help you showcase them. Our team provides personalized guidance to build 
            professional portfolios that stand out to employers in your chosen field.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Project selection guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Code review sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Portfolio design feedback</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>5-7 portfolio projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>GitHub profile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1">•</span>
                  <span>Personal website</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Placement Program',
    icon: <FaBriefcase className="mr-2" />,
    content: (
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">PLACEMENT PROGRAM</h3>
        <div className="space-y-4 text-gray-700">
          <p>
            Our comprehensive placement program gives you everything you need to land your dream job in tech. 
            We've helped hundreds of students secure positions at top companies.
          </p>
          <div className="mt-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-3">Our Placement Support Includes:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Interview Preparation</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Technical mock interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Behavioral interview coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Whiteboard practice sessions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">Career Services</h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Resume and LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Salary negotiation guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-1">•</span>
                    <span>Direct company referrals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Modern Infrastructure',
    icon: <FaBuilding className="mr-2" />,
    content: (
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">MODERN INFRASTRUCTURE</h3>
        <div className="space-y-4 text-gray-700">
          <p>
            Learn in an environment designed for success. Our state-of-the-art facilities and technology 
            ensure you have everything you need for an immersive learning experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Campus Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>High-performance workstations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Interactive smart boards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>High-speed internet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Collaborative workspaces</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Online Platform:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Live interactive classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Recorded session access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>Cloud-based labs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mt-1 mr-2">✓</span>
                  <span>24/7 learning resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function DiceAdvantage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-red-600">MAX INFOTECH ADVANTAGE</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why should you enroll in a course at MAX INFOTECH  ? Here's what makes us different.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50/50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="md:pr-6">
              {tabs[activeTab].content}
            </div>
            <div className="flex items-center justify-center bg-blue-50 rounded-lg p-8">
              <FaThumbsUp className="w-40 h-40 text-blue-400 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}