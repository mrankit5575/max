import React from "react";
import { FaHome, FaArrowUp } from "react-icons/fa";

const FloatingHomeIcon = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <style>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #14b8a6, 0 0 15px #14b8a6, 0 0 30px #14b8a6;
          }
          50% {
            box-shadow: 0 0 10px #0f766e, 0 0 25px #0f766e, 0 0 40px #0f766e;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>

      <div
        onClick={goToHome}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "3px solid #14b8a6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          animation: "glow 2s infinite ease-in-out",
          zIndex: 1000,
          backgroundColor: "#ffffff",  // white background inside circle
        }}
        title="Go to Home"
        aria-label="Go to Home"
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            animation: "bounce 2s infinite ease-in-out",
            color: "#14b8a6",
          }}
        >
          <FaArrowUp size={16} />
        </div>

        <FaHome size={28} color="#14b8a6" />
      </div>
    </>
  );
};

export default FloatingHomeIcon;
