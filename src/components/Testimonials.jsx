 import React from "react";
import { Link } from "react-router-dom"; // Make sure this import is included

const testimonials = [
  {
    name: "Ayesha Khan",
    title: "Parent of Grade 10 Student",
    feedback:
      "The tutors are incredibly patient and knowledgeable. My son's confidence and grades have improved drastically!",
    image: "/crop.png",
  },
  {
    name: "Rahul Mehta",
    title: "Engineering Student",
    feedback:
      "Excellent platform with great tutors. I passed my Calculus exam thanks to the detailed guidance I received.",
    image: "/crop2.png",
  },
  {
    name: "Rahul ",
    title: "Telly Aspirant",
    feedback:
      "24/7 availability and verified experts made my prep stress-free. Highly recommend for test prep!",
    image: "/crop1.png",
  }
];

function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            What Our <span className="text-red-600"> Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            “Success stories from our happy students and parents”
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
            >
              <div className="flex-grow">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.feedback}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative group">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="lg:w-20 lg:h-20 h-16 w-16 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 animate-ping opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-red-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <button className="px-8 py-3 bg-[#0C0950] text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
               Read More Success Stories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
