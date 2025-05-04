import React from "react";

// Testimonial data
const testimonials = [
  {
    name: "Ayesha Khan",
    title: "Parent of Grade 10 Student",
    feedback:
      "The tutors are incredibly patient and knowledgeable. My son's confidence and grades have improved drastically!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    title: "Engineering Student",
    feedback:
      "Excellent platform with great tutors. I passed my Calculus exam thanks to the detailed guidance I received.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sana Malik",
    title: "IELTS Aspirant",
    feedback:
      "24/7 availability and verified experts made my prep stress-free. Highly recommend for test prep!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

// Testimonials component
function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Trusted by <span className="text-blue-600">Students & Parents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who've experienced our tutoring firsthand
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.feedback}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;