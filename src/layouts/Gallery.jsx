import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const photos = [
  "/30.jpg",
  "/31.jpg",
  "/img1.jpg",
  "/33.jpg",
  "/34.jpg",
  "/35.jpg",
   
]; 
// Replace with your actual image URLs

const InstagramGallery = () => {
  // Keep track of which photo is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    setMouse({ x, y });
  }

  return (
    <div className="bg-white border-t border-t-blue-950 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* Decorative Shape Groups - Top Left */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4"
        style={{ top: '30px', left: '30px', gap: '15px' }}
        animate={{
          x: mouse.x * 18,
          y: mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#ef4444" />
        </svg>
        <div className="w-16 h-16 bg-[#0C0950] rounded-md"></div>
        <div className="w-16 h-16 bg-[#facc15] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Top Right */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4 items-end"
        style={{ top: '30px', right: '30px', gap: '15px' }}
        animate={{
          x: -mouse.x * 18,
          y: mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#0C0950" />
        </svg>
        <div className="w-16 h-16 bg-[#ef4444] rounded-md"></div>
        <div className="w-16 h-16 bg-[#facc15] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Bottom Left */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4"
        style={{ bottom: '30px', left: '30px', gap: '15px' }}
        animate={{
          x: mouse.x * 18,
          y: -mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#facc15" />
        </svg>
        <div className="w-16 h-16 bg-[#0C0950] rounded-md"></div>
        <div className="w-16 h-16 bg-[#ef4444] rounded-full"></div>
      </motion.div>

      {/* Decorative Shape Groups - Bottom Right */}
      <motion.div
        className="absolute z-0 flex flex-col gap-4 items-end"
        style={{ bottom: '30px', right: '30px', gap: '15px' }}
        animate={{
          x: -mouse.x * 18,
          y: -mouse.y * 12
        }}
        transition={{ type: "spring", stiffness: 40, damping: 18 }}
      >
        <svg width="60" height="60">
          <polygon points="30,0 60,60 0,60" fill="#ef4444" />
        </svg>
        <div className="w-16 h-16 bg-[#0C0950] rounded-md"></div>
        <div className="w-16 h-16 bg-[#facc15] rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={styles.container}
        className="relative z-10"
      >
        <h2 style={styles.heading}>Follow Me On Instagram</h2>
        <div style={styles.underline}></div>

        <div style={styles.gallery}>
          {photos.map((src, index) => {
            const isHovered = index === hoveredIndex;
            return (
              <div
                key={index}
                style={{
                  ...styles.photoWrapper,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={src}
                  alt={`Insta pic ${index + 1}`}
                  style={{
                    ...styles.photo,
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <div
                  style={{
                    ...styles.overlay,
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? "auto" : "none",
                  }}
                >
                  <FaInstagram style={styles.icon} />
                  <a href="https://www.instagram.com/maxknock949?igsh=MWtnenRjZXdmeTAxeg==" target="_blank" rel="noopener noreferrer" className="text-white ">
  @Max Education
</a>

                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "60px auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#000",
  },
  underline: {
    width: "80px",
    height: "5px",
    backgroundColor: "#14b8a6",
    borderRadius: "20px",
    margin: "0 auto 40px",
  },
  gallery: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  photoWrapper: {
    position: "relative",
    width: "180px",
    height: "180px",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "600",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    borderRadius: "15px",
    transition: "opacity 0.3s ease",
  },
  icon: {
    fontSize: "2rem",
  },
};

export default InstagramGallery;
