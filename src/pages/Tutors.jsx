import React, { useRef } from 'react';

const tutors = [
  { name: 'Aarav Sharma', subject: 'Math', rating: 4.8, image: 'https://randomuser.me/api/portraits/men/10.jpg' },
  { name: 'Priya Mehra', subject: 'Science', rating: 4.9, image: 'https://randomuser.me/api/portraits/women/21.jpg' },
  { name: 'Rohan Verma', subject: 'English', rating: 4.7, image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Anita Joshi', subject: 'Physics', rating: 4.8, image: 'https://randomuser.me/api/portraits/women/55.jpg' },
  { name: 'Karan Patel', subject: 'Chemistry', rating: 4.6, image: 'https://randomuser.me/api/portraits/men/33.jpg' },
  { name: 'Meera Gupta', subject: 'Biology', rating: 4.9, image: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { name: 'Vikas Singh', subject: 'History', rating: 4.5, image: 'https://randomuser.me/api/portraits/men/25.jpg' },
  { name: 'Sneha Rao', subject: 'Geography', rating: 4.7, image: 'https://randomuser.me/api/portraits/women/65.jpg' },
];

const Tutors = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Expert Tutors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highly qualified professionals ready to help you achieve your academic goals.
            </p>
          </div>
          {/* //ye sare section mene add kiye hai ?? */}
          
        </div>
      </section>
      <h2 className="text-3xl font-bold mb-6 text-center">Our Top Tutors</h2>

      {/* Scroll Buttons for Mobile */}
      <div className="md:hidden flex justify-end space-x-2 mb-2">
        <button onClick={scrollLeft} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">◀</button>
        <button onClick={scrollRight} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">▶</button>
      </div>

      {/* Card Grid */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible whitespace-nowrap scroll-smooth"
      >
        {tutors.map((tutor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-full min-w-[250px] md:min-w-0 inline-block md:inline-block"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-center mt-4">{tutor.name}</h3>
            <p className="text-center text-gray-600">{tutor.subject}</p>
            <p className="text-center text-yellow-500">⭐ {tutor.rating}</p>
            <button className="mt-4 block mx-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
