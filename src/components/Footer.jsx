 import { FaFacebookF, FaInstagram, FaBehance, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaDirections } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f141c] text-gray-300 px-6 py-12 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
          {/* Brand Information */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">MAX EDUCATION</h1>
              <p className="text-gray-400 text-sm">Legal Name<br />Detechie Digital Academy Private Limited</p>
            </div>
            
            <div className="flex flex-col space-y-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get on Google Play" 
                className="w-36 h-auto transition-opacity hover:opacity-90 cursor-pointer" 
              />
              
              <div className="flex space-x-4 pt-2">
                {[
                  { icon: <FaFacebookF />, label: "Facebook" },
                  { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaBehance />, label: "Behance" },
                  { icon: <FaTwitter />, label: "Twitter" },
                  { icon: <FaYoutube />, label: "YouTube" },
                  { icon: <FaLinkedinIn />, label: "LinkedIn" }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-gray-700">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Home", "Courses", "Placements", "Our Campus", 
                "Contact Us", "FAQs", "Hire From Us", "Learning Center", 
                "Certificate Verification", "About", "Upcoming Batches", 
                "Placements Application", "Faculty", "Join Us", 
                "Portfolio", "Blog", "Events"
              ].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-gray-700">Contact Us</h2>
            
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="text-white font-medium min-w-[60px]">Call:</span>
                <span>+91 93153 22573</span>
              </p>
              <p className="flex items-center">
                <FaWhatsapp className="text-green-500 mr-2" />
                <span>93153 22573</span>
              </p>
              <p>Placements: 93153 22573</p>
              <p>Batch: +91 93153 22573</p>
              <p>maxknock90@gmail.com</p>
              <p>info@maxknock90@gmail.com</p>
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>💳</span>
                <span>Pay Fee</span>
              </button>
              <button className="border border-gray-600 hover:border-white px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>💬</span>
                <span>Support</span>
              </button>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>🔐</span>
                <span>Login/Signup</span>
              </button>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-12">
          <h2 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
            <FaLocationDot className="text-red-500" />
            <span>Our Campuses</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {[
              {
                title: "South Delhi",
                address: "B-104, 3rd Floor (Front Side), Panchsheel Vihar, South Delhi, Delhi, India, 110017",
                landmark: "(Landmark: Triveni Shopping Complex)"
              },
              {
                title: "West Delhi",
                address: "UG floor, 2/2, Jail Road, Double Storey, Ashok Nagar, Tilak Nagar Delhi - 110018",
                landmark: "(Landmark: Rama Chole Bhature)"
              },
              {
                title: "East Delhi",
                address: "Building 1, A371 3rd floor, Gate No. 3, Nirman Vihar metro station, Pillar No. 67, New Delhi 110092",
                landmark: "(Landmark: SBI, Nirman Vihar)"
              },
              {
                title: "East Delhi",
                address: "Building 2, E-366, 1st Floor, (above COBBS) Vikas Marg, Nirman Vihar, (Exit from Nirman Vihar metro station, Gate no: 3) New Delhi - 110092",
                landmark: ""
              }
            ].map((location, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-white font-medium">{location.title}</h3>
                <p className="text-gray-400">{location.address}</p>
                {location.landmark && <p className="text-gray-500 text-xs">{location.landmark}</p>}
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors duration-200"
                >
                  <FaDirections className="mr-1" />
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} MAX EDUCATION. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}