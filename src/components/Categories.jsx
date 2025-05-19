// import React from "react";

// // Category data
// const categories = [
//   {
//     title: "Math",
//     description: "Algebra, Calculus, Geometry & more",
//     icon: "🧮",
//   },
//   {
//     title: "Science",
//     description: "Physics, Chemistry, Biology",
//     icon: "🔬",
//   },
//   {
//     title: "Languages",
//     description: "English, Spanish, French, etc.",
//     icon: "🗣️",
//   },
//   {
//     title: "Programming",
//     description: "Python, JavaScript, C++, etc.",
//     icon: "💻",
//   },
//   {
//     title: "Test Prep",
//     description: "SAT, ACT, GRE, IELTS",
//     icon: "📝",
//   },
//   {
//     title: "Business",
//     description: "Finance, Marketing, Management",
//     icon: "📊",
//   },
// ];

// // Component definition
// function Categories() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//           Explore Our <span className="text-blue-600">Categories</span>
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Find the right tutor for every subject and skill level.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {categories.map((cat, idx) => (
//           <div
//             key={idx}
//             className="bg-blue-50 hover:bg-blue-100 transition-all duration-300 p-6 rounded-xl shadow-sm text-center"
//           >
//             <div className="text-4xl mb-4">{cat.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.title}</h3>
//             <p className="text-sm text-gray-600">{cat.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // Exporting the component
// export default Categories;
