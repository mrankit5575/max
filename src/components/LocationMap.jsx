 import React from 'react';
 import img from '/map2.png'

const LocationMap = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Find Us on the Map
        </h2>

        {/* Responsive Static Map Image with Link */}
        <a
          href="https://www.google.com/maps?q=28.7428794,77.1819009"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
        >
          <img
          src={img}
             alt="MAX Education Location Map"
            className="w-full h-auto"
          />
        </a>

        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Click on the map to get directions to our institute.
        </p>
      </div>
    </section>
  );
};

export default LocationMap;
