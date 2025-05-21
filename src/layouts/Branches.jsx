 import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const branches = [
     {
    name: "Max Education Delhi",
    images: [
      "/delhi.webp",
      "/delhi3.jpg",
      "/delhi2.webp",
    ],
    location: " Office No-12, Maa Jwala Complex, Pocket 3, Badli, Samaypur, Delhi, 110042",
    contact: "+91 95408 02050 , 9540901901",
    email: "maxcomputer09@gmail.com",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/place/28%C2%B044'34.4%22N+77%C2%B010'54.8%22E/@28.7428794,77.179326,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.7428794!4d77.1819009?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Max Education MukundPur Delhi",
    images: [
       "/mp.jpg",
      "/mp1.jpg",
      "/mp2.jpg",
    ],
    location: "Gali no-11 Radha Vihar MukundPur Delhi-110042 ",
    contact: "+91 9220958292 , 9315322573 ",
    email: "maxknock90@gmail.com",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/place/28%C2%B044'34.4%22N+77%C2%B010'54.8%22E/@28.7428794,77.179326,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.7428794!4d77.1819009?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Max Education Raja Vihar",
    images: [
       "/raja.jpg",
      "/raja1.jpg",
      "/raja2.jpg",
    ],
    location: "Q42M+73F, Raja Vihar, Samaypur, Delhi, 110042",
    contact: "+91 8882612961 , 9315322573",
    email: "maxknock90@gmail.com",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/dir/28.743044,77.1818607/Q42M%2B73F,+Raja+Vihar,+Samaypur,+Delhi,+110042/@28.7500684,77.132781,17z/am=t/data=!4m13!4m12!1m1!4e1!1m5!1m1!1s0x390d010016dcfadf:0x7c484afda88e43f5!2m2!1d77.1326606!2d28.7506759!6m3!1i0!2i2!3i4?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D "
  },
  {
    name: "Max Education MithaPur",
    images: [
       "/new.jpg",
      "/new1.jpg",
      "/new2.jpg",
    ],
    location: "Gali no-11 Radha Vihar MukundPur Delhi-110042 ",
    contact: "+91 9540903903",
    email: "pankajku9354@gmail.com",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/place/28%C2%B029'15.9%22N+77%C2%B019'08.8%22E/@28.48775,77.3165318,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.48775!4d77.3191067?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Max Education (Haryana)",
    images: [
      "/max2.webp",
      "/max1.webp",
      "/max3.webp",
    ],
    location: "Ward No. 11, Khasra No. 14//4, near Shiv Mandir, Gaddha Colony, chhotu ram nagar, Haryana 124507",
    contact: "+91 9220958292",
    email: "delhi@abcinstitute.edu",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/dir//Ward+No.+11,+Khasra+No.+14%2F%2F4,+near+Shiv+Mandir,+Gaddha+Colony,+chhotu+ram+nagar,+Haryana+124507/@28.6976108,76.8791385,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d090009295467:0xf2ea0214645698cf!2m2!1d76.9615399!2d28.6976358?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Max Education Ratanpur",
    images: [
        "/maxone.webp",
        "/matwo.webp",
      "/maxthree.webp"
    ],
    location: "824P+3G7, near S.A.H Educational school, Jalil Pur, Ratanpur, Varanasi, Uttar Pradesh 221008",
    contact: "+91 092191 23445",
    email: "mumbai@abcinstitute.edu",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps?client=ms-android-realme-terr1-rso2&sca_esv=8bb619a2aead404d&hl=en-GB&cs=0&sxsrf=AHTn8zo_SyU3Eo8ejDTE1y4uQVuPzPZsrA:1747730526311&kgmid=/g/11tswsbz58&shndl=30&shem=lstuoe2&kgs=78f6b2c256f3e4a8&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KaUH0DX2MY45MWydUU_w4NsR&daddr=824P%2B3G7,+near+S.A.H+Educational+school,+Jalil+Pur,+Ratanpur,+Varanasi,+Uttar+Pradesh+221008"
  },
  {
    name: "MAX EDUCATION HUSEPUR ",
    images: [
      "/max.1.webp",
      "/max.2.webp",
      "/max.3.webp"
    ],
    location: "Adarsh Bazar, Husepur, Ghazipur, Uttar Pradesh 233001",
    contact: "+91 092191 23445",
    email: "lucknow@abcinstitute.edu",
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    mapLink: "https://www.google.com/maps/dir//Adarsh+Bazar,+Husepur,+Ghazipur,+Uttar+Pradesh+233001/@25.5481241,83.4428785,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3991ff8594a9503d:0x4123bdab182ee52a!2m2!1d83.5252849!2d25.548157?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Branches = () => {
  const [gallery, setGallery] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    branchName: ""
  });

  const openGallery = (images, branchName) => {
    setGallery({
      isOpen: true,
      images,
      currentIndex: 0,
      branchName
    });
  };

  const closeGallery = () => {
    setGallery({
      isOpen: false,
      images: [],
      currentIndex: 0,
      branchName: ""
    });
  };

  const nextImage = () => {
    setGallery(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = () => {
    setGallery(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premier Learning Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities with industry-standard labs and expert instructors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={branch.images[0]}
                  alt={branch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => openGallery(branch.images, branch.name)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-2xl font-bold text-white">{branch.name}</h3>
                  <button 
                    onClick={() => openGallery(branch.images, branch.name)}
                    className="mt-2 text-lg text-white/80 hover:text-white flex items-center "
                  >
                    View Photos ({branch.images.length})
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{branch.location}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-red-600" />
                  <a 
                    href={`tel:${branch.contact}`} 
                    className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    <span>{branch.contact}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Tap to call
                    </span>
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-red-600" />
                  <a href={`mailto:${branch.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {branch.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-red-600" />
                  <p className="text-gray-700">{branch.hours}</p>
                </div>
                
                <div className="flex gap-3 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0C0950] hover:bg-blue-900 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center"
                  >
                    View on Map
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={`tel:${branch.contact}`}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Image Gallery Modal */}
      {gallery.isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={closeGallery}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
              {gallery.branchName}
            </h3>
            
            <div className="relative h-[70vh] w-full flex items-center justify-center">
              <motion.img
                key={gallery.currentIndex}
                src={gallery.images[gallery.currentIndex]}
                alt={`${gallery.branchName} - Photo ${gallery.currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {gallery.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGallery(prev => ({ ...prev, currentIndex: index }));
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === gallery.currentIndex ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-white text-center mt-2">
              Photo {gallery.currentIndex + 1} of {gallery.images.length}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Branches;