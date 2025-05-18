// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function FloatingShapes() {
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMouse({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       {/* Top-right navy blue circle */}
//       <motion.div
//         className="fixed top-5 right-5 w-28 h-28 rounded-full bg-[#0C0950] blur-2xl pointer-events-none z-0"
//         animate={{
//           x: mouse.x * 0.02,
//           y: mouse.y * 0.02,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 50,
//           damping: 20,
//         }}
//       />

//       {/* Bottom-left white square */}
//       <motion.div
//         className="fixed bottom-5 left-5 w-20 h-20 bg-white rounded-lg shadow-lg pointer-events-none z-0"
//         animate={{
//           x: -mouse.x * 0.02,
//           y: -mouse.y * 0.02,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 50,
//           damping: 20,
//         }}
//       />
//     </>
//   );
// }
