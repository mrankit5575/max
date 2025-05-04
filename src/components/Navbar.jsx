import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            FindMyTutor
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/tutor"  className="text-gray-700 hover:text-blue-600">Find Tutors</Link>

            {/* Subjects Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                Subjects ▼
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                <Link to="/subject/math" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Math</Link>
                <Link to="/subject/science" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Science</Link>
                <Link to="/subject/english" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">English</Link>
              </div>
            </div>

            <Link to="/become-tutor" className="text-gray-700 hover:text-blue-600">Become a Tutor</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            {/* <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/tutors" className="block text-gray-700 hover:text-blue-600">Find Tutors</Link>
          <Link to="/subject/math" className="block text-gray-700 hover:text-blue-600">Math</Link>
          <Link to="/subject/science" className="block text-gray-700 hover:text-blue-600">Science</Link>
          <Link to="/subject/english" className="block text-gray-700 hover:text-blue-600">English</Link>
          <Link to="/become-tutor" className="block text-gray-700 hover:text-blue-600">Become a Tutor</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/login" className="block bg-blue-600 text-white px-4 py-1 rounded text-center">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
