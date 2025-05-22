import React from "react";

const courseMaterials = [
  {
    name: "Web Development",
    driveLink: "https://drive.google.com/folderview?id=your_web_dev_drive_id",
  },
  {
    name: "Digital Marketing",
    driveLink: "https://drive.google.com/folderview?id=your_digital_marketing_drive_id",
  },
  {
    name: "Tally & Accounting",
    driveLink: "https://drive.google.com/folderview?id=your_tally_drive_id",
  },
  {
    name: "Photoshop & Design",
    driveLink: "https://drive.google.com/folderview?id=your_photoshop_drive_id",
  },
];

export default function CourseMaterial() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 Course Materials</h2>
      <div className="grid gap-4">
        {courseMaterials.map((course, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-white shadow rounded hover:shadow-md transition"
          >
            <span className="text-lg font-medium">{course.name}</span>
            <a
              href={course.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              📂 View Material
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
