import React from "react";
import { Link } from "react-router-dom";
const BannerWithAnimation = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>
          Get Your Quality Skills{" "}
          <span style={styles.highlight}>Certificate</span> <br />
          Through MAX Education
        </h2>
                    <Link to="/contact">
        <button style={styles.button}>Get started now →</button>
                    </Link>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/tallyprime.webp" // Replace with your image or use the uploaded one
          alt="Character Animation"
          style={styles.animatedImage}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  textContainer: {
    maxWidth: "600px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#111",
    marginBottom: "20px",
  },
  highlight: {
    color: "red", // yellow color similar to your screenshot
  },
  button: {
    backgroundColor: "#0C0950", // teal color
    color: "#fff",
    padding: "12px 30px",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  imageContainer: {
    maxWidth: "300px",
  },
  animatedImage: {
    width: "100%",
    animation: "float 3s ease-in-out infinite",
  },
};

// Add keyframe animation for floating effect
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default BannerWithAnimation;
