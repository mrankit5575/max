 import { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed from Link to NavLink
import mx from '/logo.jpg'; //last edit ye hia 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
   

  // Custom class for active links
  const activeClass = "text-red-500 font-semibold";
  const mobileActiveClass = "bg-[#0C2950]/20 text-[#0C2950] font-semibold";

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-all ${isActive ? activeClass : "text-white"}`
            }
            aria-label="Home"
          >
            <img src={mx} alt="FindMyTutor Logo" className="h-12 md:h-16 lg:h-15 w-auto object-contain mr-4 rounded-full  " />
            <p className="lg:text-3xl sm:text-2xl text-white">MAX INFOTECH</p>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-white transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Home
            </NavLink>
            
            {/* <NavLink 
              to="/branches" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Our Centers
            </NavLink> */}
            {/* <NavLink 
              to= "/upcomming" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Batch
            </NavLink> */}
            <NavLink 
              to="/courses" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Courses
            </NavLink>
            
             <a
  href="https://max-portal-frontend-git-main-ankits-projects-88c25791.vercel.app/" // Replace with actual link
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-500 transition-colors text-white"
>
  Student Login
</a>

              
            
            <NavLink 
              to="/photo" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/coursematerial" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Material
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Contact
            </NavLink>
            
            <NavLink 
              to="/loginABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghidfgdfgdfgdgdfdfskasnfkjsjfifjfknfa8fjnfjfnfofdff1f54515f981f75f14ff84f1f8f4dfkjfiofuljjklmnopqrstuvwxyz0123456789" 
              className={({ isActive }) => 
                `hover:text-red-500 transition-colors ${isActive ? activeClass : "text-white"}`
              }
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu (Right Side) */}
      {isOpen && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          {/* Right Panel: Main Menu */}
          <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs z-[999] bg-white/80 backdrop-blur-md shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
              <span className="font-bold text-lg text-[#0C2950]">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-[#0C2950] text-2xl focus:outline-none">&times;</button>
            </div>
            <div className="py-2 px-4 space-y-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              {/* <NavLink 
                to="/branches" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Our Center  
              </NavLink> */}

              <NavLink 
                to="/courses" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Courses
              </NavLink>

              <NavLink 
                to="/photo" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/coursematerial" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Material
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${isActive ? mobileActiveClass : "text-[#0C2950] font-medium"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>

                <a
  href="https://max-portal-frontend-git-main-ankits-projects-88c25791.vercel.app/" // <-- Replace with actual link
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsOpen(false)}
  className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-white font-medium bg-red-500"
>
  Student Login
</a>


              <NavLink 
                to="/loginABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghidfgdfgdfgdgdfdfskasnfkjsjfifjfknfa8fjnfjfnfofdff1f54515f981f75f14ff84f1f8f4dfkjfiofuljjklmnopqrstuvwxyz0123456789" 
                className={({ isActive }) => 
                  `block px-4 py-2 rounded-md text-center hover:bg-[#1a3773] transition-colors font-medium ${isActive ? "bg-[#1a3773] text-white" : "bg-[#0C2950] text-white"}`
                }
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  