 import React from "react";

const teachers = [
  {
    name: "Manoj Kumar",
    title: "CEO | 20 Yrs Stock Market ",
    image: "/sir.avif",
  },
  {
    name: "Chaitali",
    title: "Accounting management(12Yrs)",
    image: "/mentor2png.png",
  },
  {
    name: "Ravindra",
    title: "Expert in Accounting and Graphics (6 Yrs)",
    image: "/sir2.png",
  },
  {
    name: "Yogesh",
    title: "Web Developer & Graphic Designer (5 Yrs)",
    image: "/mentor.png",
  },
];

export default function TeacherSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Our Industry Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-[#0C0950] mx-auto mb-4"></div>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Learn from certified professionals with 10+ years of industry experience and proven
            teaching excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="relative mb-5">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
                  {teacher.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3 text-center">
                  {teacher.title}
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    aria-label={`${teacher.name}'s LinkedIn`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    aria-label={`${teacher.name}'s Portfolio`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
}