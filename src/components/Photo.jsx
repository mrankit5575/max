 import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allPhotos = [
    "/img1.jpg", "/img21.jpg", "/img23.jpg", "/img2.jpg",
    "/img5.jpg", "/img6.jpg", "/img7.jpg", "/img8.jpg",
    "/img9.jpg", "/img10.jpg", "/img11.jpg", "/img20.jpg"
  ];

  const photosToShow = showAll ? allPhotos : allPhotos.slice(0, 4);

  const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => setSelectedImage(null);

  const navigate = (direction) => {
    let newIndex = direction === "prev"
      ? (currentIndex - 1 + allPhotos.length) % allPhotos.length
      : (currentIndex + 1) % allPhotos.length;

    setCurrentIndex(newIndex);
    setSelectedImage(allPhotos[newIndex]);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-gray-800"
      >
        Our Gallery
      </motion.h2>

      {/* Triangle style for first 4 images */}
        {/* Flex layout for first 4 images */}
  
 {/* Initial 4 photos in a nice flex layout for desktop */}
{!showAll ? (
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {photosToShow.map((photo, index) => (
      <motion.div
        key={index}
        className="w-[220px] h-[250px] sm:w-[260px] sm:h-[180px] rounded-xl shadow-lg cursor-pointer overflow-hidden hover:scale-170  transition duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        onClick={() => openImage(photo, allPhotos.indexOf(photo))}
      >
        <img
          src={photo}
          alt={`Gallery item ${index + 1}`}
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>
    ))}
  </div>
) : (


         
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {photosToShow.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                layout
                onClick={() => openImage(photo, allPhotos.indexOf(photo))}
              >
                <img
                  src={photo}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-lg">
                    Photo {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Toggle Buttons */}
      <div className="text-center mt-12">
        {!showAll ? (
          <motion.button
            onClick={() => setShowAll(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0C0950] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium text-lg"
          >
            Show All Photos
          </motion.button>
        ) : (
          <motion.button
            onClick={() => setShowAll(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0C0950] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium text-lg"
          >
            Hide Photos
          </motion.button>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-gray-300 transition"
              >
                &times;
              </button>
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Selected"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
                {currentIndex + 1} / {allPhotos.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
