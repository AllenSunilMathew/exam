import React, { useState, useEffect } from "react";
import {
  FaCogs,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

function MainLayout() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      title: 'Stop Struggling with "Dumb" Files',
      text: "Convert unusable mesh data into editable and fully parametric CAD models.",
      icon: (
        <FaCogs
          style={{
            fontSize: "2.8rem",
            marginBottom: "18px",
            color: "#00bfff",
          }}
        />
      ),
      bg: "linear-gradient(145deg, rgba(0,123,255,0.18), rgba(255,255,255,0.05))",
    },
    {
      title: "Eliminate Downtime from Missing Prints",
      text: "Rebuild lost or outdated engineering drawings quickly and accurately.",
      icon: (
        <FaTools
          style={{
            fontSize: "2.8rem",
            marginBottom: "18px",
            color: "#00ffaa",
          }}
        />
      ),
      bg: "linear-gradient(145deg, rgba(0,255,170,0.15), rgba(255,255,255,0.05))",
    },
    {
      title: "Zero-Fitment Risk",
      text: "Ensure precision and compatibility with highly accurate reverse-engineered CAD geometry.",
      icon: (
        <FaShieldAlt
          style={{
            fontSize: "2.8rem",
            marginBottom: "18px",
            color: "#ffb347",
          }}
        />
      ),
      bg: "linear-gradient(145deg, rgba(255,180,0,0.15), rgba(255,255,255,0.05))",
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, features.length]);

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
      backgroundImage:
        "url('https://t3.ftcdn.net/jpg/05/33/04/50/240_F_533045037_8lMPveQYe4gVEH5peMajGo4tlrpYbQuH.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75))",
      zIndex: 0,
    },

    left: {
      flex: "1 1 600px",
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

    sliderWindow: {
      width: "100%",
      maxWidth: "550px",
      overflow: "hidden",
      marginTop: "25px",
      borderRadius: "22px",
    },

    sliderTrack: {
      display: "flex",
      width: `${features.length * 100}%`,
      transform: `translateX(-${
        (currentCard * 100) / features.length
      }%)`,
      transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
    },

    card: {
      width: `${100 / features.length}%`,
      padding: "30px",
      boxSizing: "border-box",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 10px 35px rgba(0,0,0,0.25)",
      borderRadius: "22px",
    },

    cardTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "15px",
      lineHeight: "1.3",
    },

    /* UPDATED DOTS */
    dotsContainer: {
      display: "flex",
      gap: "12px",
      marginTop: "20px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      position: "relative",
      zIndex: 3,
    },

    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "all 0.3s ease",
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
      background: "linear-gradient(135deg,#007bff,#00bfff)",
      color: "white",
      fontWeight: "700",
      fontSize: "1.1rem",
      cursor: "pointer",
      boxShadow: "0 8px 25px rgba(0,123,255,0.35)",
      transition: "0.3s ease",
    },

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

      form: {
        padding: "25px",
      },

      dotsContainer: {
        justifyContent: "center",
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

      dotsContainer: {
        justifyContent: "center",
      },
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.overlay}></div>

      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1 style={styles.h1}>
          Scan to CAD & Reverse Engineering Services in NSW
        </h1>

        <p style={styles.p}>
          We provide high-accuracy Scan-to-CAD and reverse engineering
          solutions for industries requiring production-ready digital
          models. Convert physical components into editable CAD files
          with exceptional precision for manufacturing, repairs,
          redesigns, and technical documentation.
        </p>

        <h2 style={styles.h2}>
          Tailored 3D Solutions for Your Complex Engineering Challenges
        </h2>

        {/* SLIDER */}
        <div
          style={styles.sliderWindow}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={styles.sliderTrack}>
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  ...styles.card,
                  background: feature.bg,
                }}
              >
                {feature.icon}

                <div style={styles.cardTitle}>
                  {feature.title}
                </div>

                <p style={styles.p}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div style={styles.dotsContainer}>
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              style={{
                ...styles.dot,
                background:
                  index === currentCard
                    ? "#00bfff"
                    : "rgba(255,255,255,0.3)",

                transform:
                  index === currentCard
                    ? "scale(1.2)"
                    : "scale(1)",

                width:
                  index === currentCard
                    ? "24px"
                    : "12px",

                borderRadius:
                  index === currentCard
                    ? "6px"
                    : "50%",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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