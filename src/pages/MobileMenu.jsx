import { NavLink } from "react-router-dom";
import { useState } from "react";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const [showCourses, setShowCourses] = useState(false);
  const [showBranches, setShowBranches] = useState(false);

  const mobileActiveClass = "text-white bg-[#0C2950] font-bold";

  return (
    isOpen && (
      <div>
        {/* Overlay */}
        <div
          className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />

        {/* Right Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs z-[999] bg-white/80 backdrop-blur-md shadow-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ borderTopLeftRadius: "1.5rem", borderBottomLeftRadius: "1.5rem" }}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <span className="font-bold text-lg text-[#0C2950]">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-[#0C2950] text-2xl">&times;</button>
          </div>

          <div className="py-2 px-4 space-y-2">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${
                  isActive ? mobileActiveClass : "text-[#0C2950] font-medium"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {/* Our Center with Dropdown */}
            <button
              onClick={() => setShowBranches(!showBranches)}
              className="block w-full text-left px-3 py-2 rounded-md text-[#0C2950] font-medium hover:bg-[#0C2950]/10 transition-colors"
            >
              Our Center
            </button>
            {showBranches && (
              <div className="ml-4 space-y-1">
                <NavLink
                  to="/branches/branch1"
                  className="block px-3 py-1 text-sm text-[#0C2950] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Branch 1
                </NavLink>
                <NavLink
                  to="/branches/branch2"
                  className="block px-3 py-1 text-sm text-[#0C2950] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Branch 2
                </NavLink>
              </div>
            )}

            {/* Courses with Dropdown */}
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="block w-full text-left px-3 py-2 rounded-md text-[#0C2950] font-medium hover:bg-[#0C2950]/10 transition-colors"
            >
              Courses
            </button>
            {showCourses && (
              <div className="ml-4 space-y-1">
                <NavLink
                  to="/courses/web-development"
                  className="block px-3 py-1 text-sm text-[#0C2950] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/courses/dca"
                  className="block px-3 py-1 text-sm text-[#0C2950] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  DCA
                </NavLink>
              </div>
            )}

            {/* Gallery */}
            <NavLink
              to="/photo"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${
                  isActive ? mobileActiveClass : "text-[#0C2950] font-medium"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md hover:bg-[#0C2950]/10 transition-colors ${
                  isActive ? mobileActiveClass : "text-[#0C2950] font-medium"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            {/* Login */}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-center hover:bg-[#1a3773] transition-colors font-medium ${
                  isActive ? "bg-[#1a3773] text-white" : "bg-[#0C2950] text-white"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
