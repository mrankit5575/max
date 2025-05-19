import { useState } from "react";
import { Link } from "react-router-dom";
import mx from '/mx-2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);

  const courses = [
    { label: "Tally Prime", link: "/courses/tally" },
    { label: "Basic Computer", link: "/courses/basic-computer" },
    { label: "Web Development", link: "/courses/web-development" },
    { label: "DCA", link: "/courses/dca" },
    { label: "Photoshop", link: "/courses/photoshop" },
    { label: "Video Editing", link: "/courses/video-editing" },
    { label: "Animation", link: "/courses/animation" },
  ];

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md transition-all" aria-label="Home">
            <img src={mx} alt="FindMyTutor Logo" className="h-12 md:h-16 lg:h-15 w-auto object-contain mr-4" />
            <p className="text-white">MAX Education</p>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-red-500 transition-colors">Home</Link>
            <Link to="/photo" className="text-white hover:text-red-500 transition-colors">Gallery</Link>
            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                className="px-4 py-2 rounded-md font-medium transition-all duration-200 bg-[#0C2950] text-white hover:bg-[#1a3773] focus:outline-none"
                onMouseEnter={() => setIsSubjectsOpen(true)}
                onMouseLeave={() => setIsSubjectsOpen(false)}
                onClick={() => setIsSubjectsOpen((prev) => !prev)}
                type="button"
              >
                Courses
              </button>
              {/* Dropdown */}
              <div
                onMouseEnter={() => setIsSubjectsOpen(true)}
                onMouseLeave={() => setIsSubjectsOpen(false)}
                className={`absolute left-0 mt-2 min-w-[220px] rounded-xl shadow-2xl transition-all duration-300 ease-in-out
                  ${isSubjectsOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-8 pointer-events-none"}
                  bg-white/60 backdrop-blur-md border border-[#0C2950]`}
                style={{ zIndex: 100 }}
              >
                <ul className="py-2">
                  {courses.map((course) => (
                    <li key={course.link}>
                      <Link
                        to={course.link}
                        className="block px-5 py-2 text-[#0C2950] hover:bg-[#0C2950] hover:text-white transition-all duration-200 rounded-md"
                        onClick={() => setIsSubjectsOpen(false)}
                      >
                        {course.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/contact" className="text-white hover:text-red-500 transition-colors">Contact</Link>
            <Link to="/login" className="text-white hover:text-red-500 transition-colors">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
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
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-[#0C2950] font-medium" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/tutor" className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-[#0C2950] font-medium" onClick={() => setIsOpen(false)}>Find Tutors</Link>
              <Link to="/courses" className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-[#0C2950] font-medium" onClick={() => setIsOpen(false)}>Courses</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-[#0C2950] font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors text-[#0C2950] font-medium" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/login" className="block bg-[#0C2950] text-white px-4 py-2 rounded-md text-center hover:bg-[#1a3773] transition-colors font-medium" onClick={() => setIsOpen(false)}>Login</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
