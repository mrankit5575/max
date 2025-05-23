 import React from "react";
import { FaGoogleDrive, FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";

const courseMaterials = [
  {
    name: "Web Development",
    driveLink: "file:///C:/Users/ankit/AppData/Local/Microsoft/Windows/INetCache/IE/G064VP43/book_page[2].pdf",
    icon: "💻",
    color: "bg-blue-50 border-blue-100 text-blue-600"
  },
  {
    name: "Digital Marketing",
    driveLink: "https://drive.google.com/folderview?id=your_digital_marketing_drive_id",
    icon: "📈",
    color: "bg-purple-50 border-purple-100 text-purple-600"
  },
  {
    name: "Tally & Accounting",
    driveLink: "https://drive.google.com/folderview?id=your_tally_drive_id",
    icon: "🧮",
    color: "bg-green-50 border-green-100 text-green-600"
  },
  {
    name: "Photoshop & Design",
    driveLink: "https://drive.google.com/folderview?id=your_photoshop_drive_id",
    icon: "🎨",
    color: "bg-pink-50 border-pink-100 text-pink-600"
  },
];

export default function CourseMaterial() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
          <FaBookOpen className="mr-3 text-indigo-500" />
          Course Materials Library
        </h2>
        <p className="text-gray-500">Access all your learning resources in one place</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {courseMaterials.map((course, index) => (
          <div
            key={index}
            className={`group border rounded-xl p-5 ${course.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <span className="text-2xl p-2 rounded-lg">{course.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Google Drive Resources</p>
                </div>
              </div>
              
              <a
                href={course.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 px-4 py-2 rounded-lg flex items-center space-x-2 bg-white border ${course.color.replace('50', '100')} text-sm font-medium hover:shadow-md transition-colors`}
              >
                <FaGoogleDrive className="text-current" />
                <span>Open</span>
                <FaExternalLinkAlt className="text-xs opacity-70" />
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-opacity-30 border-gray-300">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Last updated: 2 days ago</span>
                <span>12 files</span>
              </div>
            </div>
          </div>
        ))}
      </div>

       
    </div>
  );
}