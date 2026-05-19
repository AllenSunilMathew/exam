// Hero.jsx

import React from "react";
import Header from "./Header";
import MainLayout from "./MainLayout";

function Hero() {
  const styles = {
    hero: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      padding: "80px 8%",
      position: "relative",
      fontFamily: "'Smooch Sans', sans-serif",
      flexWrap: "wrap",
      boxSizing: "border-box",
      background: "#050c16",
      overflow: "hidden", // Prevents background bleed
    },

    /* BACKGROUND IMAGE HOOK */
    bgImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },

    /* DARK OVERLAY */
    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(rgba(5,12,22,0.55), rgba(5,12,22,0.78))",
      zIndex: 1,
    },

    /* LEFT CONTENT */
    content: {
      position: "relative",
      zIndex: 2,
      flex: "1 1 600px",
      color: "white",
      minWidth: "300px",
    },

    heading: {
      fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
      lineHeight: "1.1",
      marginBottom: "25px",
      fontWeight: "700",
      letterSpacing: "1px",
    },

    paragraph: {
      fontSize: "clamp(1rem, 2vw, 1.4rem)",
      lineHeight: "1.8",
      color: "#e0e0e0",
      maxWidth: "650px",
      marginBottom: "35px",
      fontWeight: "300",
    },

    button: {
      padding: "16px 34px",
      background: "linear-gradient(135deg,#007bff,#00bfff)",
      border: "none",
      borderRadius: "12px",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 8px 25px rgba(0,123,255,0.35)",
      transition: "0.3s ease",
    },

    /* TRUST BAR */
    trustBar: {
      marginTop: "45px",
      display: "flex",
      alignItems: "center",
      gap: "25px",
      flexWrap: "wrap",
      background: "rgba(255,255,255,0.08)",
      padding: "18px 24px",
      borderRadius: "16px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.08)",
      width: "fit-content",
      maxWidth: "100%",
    },

    trustText: {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "white",
    },

    logo: {
      height: "40px",
      objectFit: "contain",
      filter: "brightness(1000%)",
    },

    /* RIGHT SIDE IMAGE */
    imageSection: {
      position: "relative",
      zIndex: 2,
      flex: "1 1 450px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "300px",
    },

    image: {
      width: "100%",
      maxWidth: "700px",
      borderRadius: "22px",
      boxShadow: "0 15px 50px rgba(0,0,0,0.45)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  };

  return (
    <>
      <Header />

      <section style={styles.hero}>
        {/* BACKGROUND IMAGE */}
        <img
          style={styles.bgImage}
          src="https://t4.ftcdn.net/jpg/03/17/05/79/240_F_317057918_eTRXcR7xm9prKCIoSdDVj04oWg5yINqn.jpg"
          alt="Background Visual"
        />

        {/* OVERLAY */}
        <div style={styles.overlay}></div>

        {/* LEFT CONTENT */}
        <div style={styles.content}>
          <h1 style={styles.heading}>
            Convert Physical Parts to
            <br />
            Production-Ready CAD Models
          </h1>

          <p style={styles.paragraph}>
            High-accuracy reverse engineering for manufacturing, mining, and
            automotive industries. Get STL to STEP/IGES conversion with
            guaranteed precision and faster turnaround time.
          </p>

          <button style={styles.button}>Request a Quote</button>

          {/* TRUST BAR */}
          <div style={styles.trustBar}>
            <span style={styles.trustText}>Trusted Tools:</span>

            <img
              style={styles.logo}
              src="https://cdn.worldvectorlogo.com/logos/autodesk-2.svg"
              alt="Autodesk"
            />

            <img
              style={styles.logo}
              src="https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg"
              alt="SolidWorks"
            />

            <img
              style={styles.logo}
              src="https://img.icons8.com/?size=96&id=6LuKZMwS6lAo&format=png"
              alt="Catia"
            />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div style={styles.imageSection}>
          <img
            style={styles.image}
            src="https://t3.ftcdn.net/jpg/18/80/05/66/240_F_1880056605_PGr07d3FIyOLWFjJmnAhIQ6IMB7BY0Fx.jpg"
            alt="3D Scan to CAD"
          />
        </div>
      </section>

      <MainLayout />
    </>
  );
}

export default Hero;