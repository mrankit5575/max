  // src/pages/CourseDetails.jsx
  import React from "react";
  import { useParams } from "react-router-dom";
  import Contact from "./Contact";

  const courses = [
    {
      title: "Tally Prime",
      description: "Master accounting with Tally Prime, GST, and billing.",
      image: "/tallyprime.webp",
      slug: "tally",
      content: "This course includes fundamentals of accounting, GST filing, company creation, ledgers, and advanced voucher entries in Tally Prime.",
    },
    {
      title: "Basic Computer",
      description: "Learn fundamental computer operations and MS Office.",
      image: "/basic.webp",
      slug: "basic-computer",
      content: "Covers Windows OS basics, MS Word, Excel, PowerPoint, internet usage, and typing practice.",
    },
    {
      title: "Web Development",
      description: "Build websites with HTML, CSS, JavaScript, and React.",
      image: "/web.webp",
      slug: "web-development",
      content: "Includes HTML5, CSS3, JavaScript, responsive design, React basics, and GitHub deployment.",
    },
    {
      title: "DCA",
      description: "Comprehensive computer course with practical training.",
      image: "/vidoe.webp",
      slug: "dca",
      content: "This diploma covers MS Office, internet, basic programming, typing, and design tools like Photoshop.",
    },
    {
      title: "Photoshop",
      description: "Learn graphic design and photo editing in Photoshop.",
      image: "/photoshape.webp",
      slug: "photoshop",
      content: "Learn layers, tools, effects, retouching, background removal, and design projects.",
    },
    {
      title: "Video Editing",
      description: "Create and edit videos using Premiere Pro and Filmora.",
      image: "/vidoe.webp",
      slug: "video-editing",
      content: "Covers cutting, transitions, titles, sound editing, and rendering for YouTube or clients.",
    },
    {
      title: "Animation",
      description: "Learn 2D and 3D animation using modern tools.",
      image: "/tallyprime.webp",
      slug: "animation",
      content: "Includes 2D animation in After Effects and 3D basics in Blender or Maya.",
    },
  ];

  const CourseDetails = () => {
    const { slug } = useParams();
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
      return (
        <div className="p-8 text-center text-red-500">
          Course not found.
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-2xl shadow"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-6">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <div className="mt-4 text-gray-700 leading-relaxed">
            {course.content}
          </div>
          <a href="/courses" className="text-blue-600 mt-6 inline-block hover:underline">
            ← Back to Courses
          </a>
        </div>
        <Contact/>
      </div>
    );
  };

  export default CourseDetails;
