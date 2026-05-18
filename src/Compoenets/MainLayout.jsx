// MainLayout.jsx

import React from "react";
import {
  FaCogs,
  FaTools,
  FaShieldAlt,
  FaIndustry,
  FaCar,
  FaBuilding,
  FaSearch,
  FaProjectDiagram,
  FaCube,
} from "react-icons/fa";

function MainLayout() {
  const styles = {
    section: {
      width: "100%",
      minHeight: "100vh",
      padding: "80px 6%",
      display: "flex",
      flexWrap: "wrap",
      gap: "50px",
      position: "relative",
      overflow: "hidden",
      color: "white",
      fontFamily: "'Smooch Sans', sans-serif",
      boxSizing: "border-box",
      alignItems: "flex-start",
    },

    /* VIDEO BACKGROUND */
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",

      /* MORE VISIBLE VIDEO */
      filter: "brightness(0.8) contrast(1.2) saturate(1.2)",
      zIndex: -2,
    },

    /* LIGHTER OVERLAY */
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65))",
      zIndex: -1,
    },

    left: {
      flex: "1 1 700px",
      position: "relative",
      zIndex: 2,
      minWidth: "300px",
    },

    right: {
      flex: "1 1 350px",
      position: "relative",
      zIndex: 2,
      minWidth: "300px",
    },

    h1: {
      fontSize: "clamp(2.5rem, 5vw, 5rem)",
      marginBottom: "25px",
      fontWeight: "700",
      lineHeight: "1.1",
    },

    h2: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      marginTop: "70px",
      marginBottom: "30px",
      fontWeight: "700",
      lineHeight: "1.2",
    },

    p: {
      color: "#f1f1f1",
      lineHeight: "1.8",
      fontSize: "clamp(1rem, 2vw, 1.3rem)",
      fontWeight: "300",
    },

    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
      marginTop: "25px",
    },

    card: {
      background: "rgba(255,255,255,0.10)",
      padding: "30px",
      borderRadius: "22px",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.12)",
      transition: "0.3s ease",
      boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
    },

    icon: {
      fontSize: "2.8rem",
      marginBottom: "18px",
    },

    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "15px",
      lineHeight: "1.3",
    },

    form: {
      background: "rgba(255,255,255,0.10)",
      padding: "35px",
      borderRadius: "25px",
      backdropFilter: "blur(15px)",
      position: "sticky",
      top: "100px",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
    },

    input: {
      width: "100%",
      padding: "16px",
      marginBottom: "18px",
      borderRadius: "12px",
      border: "none",
      outline: "none",
      fontSize: "1rem",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.95)",
    },

    textarea: {
      width: "100%",
      padding: "16px",
      minHeight: "130px",
      borderRadius: "12px",
      border: "none",
      outline: "none",
      marginBottom: "18px",
      fontSize: "1rem",
      resize: "vertical",
      boxSizing: "border-box",
      background: "rgba(255,255,255,0.95)",
    },

    button: {
      width: "100%",
      padding: "18px",
      border: "none",
      borderRadius: "14px",
      background:
        "linear-gradient(135deg,#007bff,#00bfff)",
      color: "white",
      fontWeight: "700",
      fontSize: "1.1rem",
      cursor: "pointer",
      boxShadow:
        "0 8px 25px rgba(0,123,255,0.35)",
      transition: "0.3s ease",
    },

    workflow: {
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      marginTop: "20px",
    },

    workflowCard: {
      display: "flex",
      alignItems: "center",
      gap: "22px",
      background: "rgba(255,255,255,0.08)",
      padding: "22px",
      borderRadius: "18px",
      backdropFilter: "blur(10px)",
      flexWrap: "wrap",
    },

    cta: {
      marginTop: "80px",
      padding: "50px 30px",
      borderRadius: "25px",
      background:
        "linear-gradient(135deg,#007bff,#00bfff)",
      textAlign: "center",
      boxShadow:
        "0 10px 40px rgba(0,123,255,0.3)",
    },

    ctaTitle: {
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: "700",
      marginBottom: "25px",
      lineHeight: "1.3",
    },

    /* RESPONSIVE */
    "@media (max-width: 1024px)": {
      section: {
        padding: "60px 5%",
      },

      form: {
        position: "relative",
        top: 0,
      },
    },

    "@media (max-width: 768px)": {
      section: {
        flexDirection: "column",
        padding: "50px 20px",
      },

      left: {
        width: "100%",
      },

      right: {
        width: "100%",
      },

      cardGrid: {
        gridTemplateColumns: "1fr",
      },

      workflowCard: {
        flexDirection: "column",
        alignItems: "flex-start",
      },

      form: {
        padding: "25px",
      },

      cta: {
        padding: "40px 20px",
      },
    },

    "@media (max-width: 480px)": {
      section: {
        padding: "40px 15px",
      },

      card: {
        padding: "22px",
      },

      form: {
        padding: "22px",
      },

      input: {
        padding: "14px",
      },

      textarea: {
        padding: "14px",
      },

      button: {
        padding: "16px",
      },
    },
  };

  return (
    <section style={styles.section}>

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={styles.video}
      >
        <source
          src="/src/assets/act.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>

      {/* OVERLAY */}
      <div style={styles.overlay}></div>

      {/* LEFT SIDE */}
      <div style={styles.left}>

        <h1 style={styles.h1}>
          Scan to CAD & Reverse Engineering
          Services in NSW
        </h1>

        <p style={styles.p}>
          We provide high-accuracy Scan-to-CAD and
          reverse engineering solutions for industries
          requiring production-ready digital models.
          Convert physical components into editable CAD
          files with exceptional precision for
          manufacturing, repairs, redesigns, and
          technical documentation.
        </p>

        {/* FEATURES */}
        <h2 style={styles.h2}>
          Tailored 3D Solutions for Your Complex
          Engineering Challenges
        </h2>

        <div style={styles.cardGrid}>

          {/* CARD 1 */}
          <div
            style={{
              ...styles.card,
              background:
                "linear-gradient(145deg, rgba(0,123,255,0.18), rgba(255,255,255,0.05))",
            }}
          >
            <FaCogs
              style={{
                ...styles.icon,
                color: "#00bfff",
              }}
            />

            <div style={styles.cardTitle}>
              Stop Struggling with "Dumb" Files
            </div>

            <p style={styles.p}>
              Convert unusable mesh data into editable
              and fully parametric CAD models.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              ...styles.card,
              background:
                "linear-gradient(145deg, rgba(0,255,170,0.15), rgba(255,255,255,0.05))",
            }}
          >
            <FaTools
              style={{
                ...styles.icon,
                color: "#00ffaa",
              }}
            />

            <div style={styles.cardTitle}>
              Eliminate Downtime from Missing Prints
            </div>

            <p style={styles.p}>
              Rebuild lost or outdated engineering
              drawings quickly and accurately.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              ...styles.card,
              background:
                "linear-gradient(145deg, rgba(255,180,0,0.15), rgba(255,255,255,0.05))",
            }}
          >
            <FaShieldAlt
              style={{
                ...styles.icon,
                color: "#ffb347",
              }}
            />

            <div style={styles.cardTitle}>
              Zero-Fitment Risk
            </div>

            <p style={styles.p}>
              Ensure precision and compatibility with
              highly accurate reverse-engineered CAD
              geometry.
            </p>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <div style={styles.right}>
        <form style={styles.form}>

          <h2 style={{ marginBottom: "25px" }}>
            Request a Quote
          </h2>

          <input
            style={styles.input}
            type="text"
            placeholder="Name *"
            required
          />

          <input
            style={styles.input}
            type="email"
            placeholder="Email *"
            required
          />

          <input
            style={styles.input}
            type="tel"
            placeholder="Phone *"
            required
          />

          <input
            style={styles.input}
            type="file"
          />

          <textarea
            style={styles.textarea}
            placeholder="Comments"
          ></textarea>

          <button
            type="submit"
            style={styles.button}
          >
            Submit
          </button>

        </form>
      </div>

    </section>
  );
}

export default MainLayout;