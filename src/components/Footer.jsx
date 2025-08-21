 import { FaFacebookF, FaInstagram, FaBehance, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp, FaDirections } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f141c] text-gray-300 px-6 py-12 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">MAX INFOTECH
</h1>
              <p className="text-gray-400 text-sm">Developer! -    <a href="https://www.instagram.com/viranshusingh055/" target="_blank">Ankit Singh</a><br />ankitroy5575@gmail.com</p>
              <p className="text-gray-400 text-sm"><a href="https://www.avdevelopment.in/" target="_blank">avdevelopment Private Limited</a><br /></p>
            </div>

            <div className="flex flex-col space-y-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get on Google Play"
                className="w-36 h-auto transition-opacity hover:opacity-90 cursor-pointer"
              />

              <div className="flex space-x-4 pt-2">
                {[{ icon: <FaFacebookF />, label: "Facebook" }, { icon: <FaInstagram />, label: "Instagram" },
                  { icon: <FaBehance />, label: "Behance" }, { icon: <FaTwitter />, label: "Twitter" },
                  { icon: <FaYoutube />, label: "YouTube" }, { icon: <FaLinkedinIn />, label: "LinkedIn" }]
                  .map((social, index) => (
                    <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label={social.label}>
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
                { label: "Home", path: "/" },
                { label: "Courses", path: "/courses" },
                { label: "Placements", path: "/feedback" },
                { label: "Our Campus", path: "/photo" },
                { label: "Contact Us", path: "/contact" },
                { label: "FAQs", path: "/contact" },
                { label: "Hire From Us", path: "/contact" },
                { label: "Learning Center", path: "/branches" },
                { label: "Certificate Verification", path: "/verify" },
                { label: "About", path: "/contact" },
                { label: "Upcoming Batches", path: "/upcomming" },
                { label: "Placements Application", path: "/feedback" },
                { label: "Faculty", path: "/teacher" },
                { label: "Join Us", path: "/contact" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Blog", path: "/blog" },
                { label: "Events", path: "/events" },
              ].map((link) => (
                <a key={link.label} href={link.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-gray-700">Contact Us</h2>

            <div className="space-y-2">
              <p className="flex items-start"><span className="text-white font-medium min-w-[60px]">Call:</span> <span>+91 93153 22573</span></p>
              <p className="flex items-center"><FaWhatsapp className="text-green-500 mr-2" /> <span>93153 22573</span></p>
              <p>Placements: 93153 22573</p>
              <p>Batch: +91 93153 22573</p>
              <p>maxinfotech9@gmail.com</p>
            </div>

            <div className="flex flex-col space-y-3 pt-2">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>💳</span><span>Pay Fee Offline</span>
              </button>
              <button className="border border-gray-600 hover:border-white px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
               <Link to= "/contact"> <span>💬</span><span>Support</span></Link>
              </button>
              <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
             <Link               to="/loginABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghidfgdfgdfgdgdfdfskasnfkjsjfifjfknfa8fjnfjfnfofdff1f54515f981f75f14ff84f1f8f4dfkjfiofuljjklmnopqrstuvwxyz0123456789" 
><span>🔐</span><span>Login/Signup</span></Link>  
              </button>
            </div>
          </div>
        </div>                        

        {/* Address Section */}
        <div className="mt-12">
          <h2 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
            <FaLocationDot className="text-red-500" /><span>Our Campuses</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            {[
               
              {
                title: "MAX INFOTECH MukundPur Delhi",
                address: "Gali no-11 Radha Vihar MukundPur Delhi-110042",
                landmark: "(Machli Market Radha Vihar)",
                maps: "https://www.google.com/maps/place/28%C2%B044'34.4%22N+77%C2%B010'54.8%22E/@28.7428794,77.179326,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.7428794!4d77.1819009?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
              },
              {
                title: " MAX INFOTECH Raja Viha",
                address: "Q42M+73F, Raja Vihar, Samaypur, Delhi, 110042",
                landmark: "(Landmark: SBI, Nirman Vihar)",
                maps: "https://www.google.com/maps/dir/28.743044,77.1818607/Q42M%2B73F,+Raja+Vihar,+Samaypur,+Delhi,+110042/@28.7500684,77.132781,17z/am=t/data=!4m13!4m12!1m1!4e1!1m5!1m1!1s0x390d010016dcfadf:0x7c484afda88e43f5!2m2!1d77.1326606!2d28.7506759!6m3!1i0!2i2!3i4?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
              },
               
                
            ].map((location, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-white font-medium">{location.title}</h3>
                <p className="text-gray-400">{location.address}</p>
                {location.landmark && <p className="text-gray-500 text-xs">{location.landmark}</p>}
                <a href={location.maps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors duration-200">
                  <FaDirections className="mr-1" />
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} MAX EDUCATION. All Rights Reserved.</p>
          <p className="mt-1">Developed by <span className="text-white font-semibold">Ankit Singh</span> | WhatsApp: <a href="https://wa.me/919718659236" className="text-green-400 hover:text-green-300">9718659236</a></p>
          {/* <p className="mt-1">social <span className="text-white font-semibold">Ankit Singh</span> | WhatsApp: <a href="https://wa.me/919718659236" className="text-green-400 hover:text-green-300">9718659236</a></p> */}
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors duration-200">Terms of Service</a>
            <a href="/sitemap" className="hover:text-gray-300 transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
