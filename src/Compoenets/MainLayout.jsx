import React, { useState, useEffect } from "react";
import { FaCogs, FaTools, FaShieldAlt } from "react-icons/fa";

// Accept the current language state from the parent Hero/App component
function MainLayout({ lang = "en" }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Translation data dictionary
  const translations = {
    en: {
      h1: "Scan to CAD & Reverse Engineering Services in NSW",
      p1: "We provide high-accuracy Scan-to-CAD and reverse engineering solutions for industries requiring production-ready digital models. Convert physical components into editable CAD files with exceptional precision for manufacturing, repairs, redesigns, and technical documentation.",
      h2: "Tailored 3D Solutions for Your Complex Engineering Challenges",
      formTitle: "Request a Quote",
      inputName: "Name *",
      inputEmail: "Email *",
      inputPhone: "Phone *",
      btnSubmit: "Submit",
      features: [
        {
          title: 'Stop Struggling with "Dumb" Files',
          text: "Convert unusable mesh data into editable and fully parametric CAD models.",
          bg: "linear-gradient(145deg, rgba(0,123,255,0.18), rgba(255,255,255,0.05))",
        },
        {
          title: "Eliminate Downtime from Missing Prints",
          text: "Rebuild lost or outdated engineering drawings quickly and accurately.",
          bg: "linear-gradient(145deg, rgba(0,255,170,0.15), rgba(255,255,255,0.05))",
        },
        {
          title: "Zero-Fitment Risk",
          text: "Ensure precision and compatibility with highly accurate reverse-engineered CAD geometry.",
          bg: "linear-gradient(145deg, rgba(255,180,0,0.15), rgba(255,255,255,0.05))",
        },
      ],
    },
    hi: {
      h1: "NSW में स्कैन टू कैड (Scan to CAD) और रिवर्स इंजीनियरिंग सेवाएं",
      p1: "हम उन उद्योगों के लिए उच्च-सटीक स्कैन-टू-सीएडी और रिवर्स इंजीनियरिंग समाधान प्रदान करते हैं जिन्हें प्रोडक्शन-रेडी डिजिटल मॉडल की आवश्यकता होती है। विनिर्माण, मरम्मत, पुनर्रचना और तकनीकी दस्तावेज़ीकरण के लिए असाधारण सटीकता के साथ भौतिक घटकों को संपादन योग्य (editable) CAD फ़ाइलों में बदलें।",
      h2: "आपकी जटिल इंजीनियरिंग चुनौतियों के लिए विशेष 3D समाधान",
      formTitle: "कोटेशन का अनुरोध करें",
      inputName: "नाम *",
      inputEmail: "ईमेल *",
      inputPhone: "फ़ोन *",
      btnSubmit: "सबमिट करें",
      features: [
        {
          title: '"डम्ब" फाइलों से परेशान होना बंद करें',
          text: "अनुपयोगी मेश डेटा (mesh data) को संपादन योग्य और पूरी तरह से पैरामीट्रिक CAD मॉडल में बदलें।",
          bg: "linear-gradient(145deg, rgba(0,123,255,0.18), rgba(255,255,255,0.05))",
        },
        {
          title: "गुम प्रिंटों के कारण होने वाले डाउनटाइम को खत्म करें",
          text: "खोए हुए या पुराने इंजीनियरिंग चित्रों को तेज़ी से और सटीक रूप से फिर से तैयार करें।",
          bg: "linear-gradient(145deg, rgba(0,255,170,0.15), rgba(255,255,255,0.05))",
        },
        {
          title: "शून्य-फ़िटमेंट जोखिम",
          text: "अत्यधिक सटीक रिवर्स-इंजीनियर्ड CAD ज्योमेट्री के साथ शुद्धता और अनुकूलता सुनिश्चित करें।",
          bg: "linear-gradient(145deg, rgba(255,180,0,0.15), rgba(255,255,255,0.05))",
        },
      ],
    },
  };

  // Fallback support if language variable falls outside scope
  const currentText = translations[lang] || translations["en"];

  // Static icon references mapped directly to item indexes
  const icons = [
    <FaCogs style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#00bfff" }} />,
    <FaTools style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#00ffaa" }} />,
    <FaShieldAlt style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#ffb347" }} />
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % currentText.features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, currentText.features.length]);

  return (
    <section className="main-layout-section">
      <div className="layout-overlay"></div>

      {/* LEFT SIDE CONTENT */}
      <div className="layout-left">
        <h1 className={`layout-h1 ${lang !== "en" ? "native-font" : ""}`}>
          {currentText.h1}
        </h1>

        <p className="layout-p">
          {currentText.p1}
        </p>

        <h2 className={`layout-h2 ${lang !== "en" ? "native-font" : ""}`}>
          {currentText.h2}
        </h2>

        {/* SLIDER */}
        <div
          className="layout-slider-window"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="layout-slider-track" 
            style={{ 
              width: `${currentText.features.length * 100}%`,
              transform: `translateX(-${(currentCard * 100) / currentText.features.length}%)` 
            }}
          >
            {currentText.features.map((feature, index) => (
              <div
                key={index}
                className="layout-card"
                style={{
                  width: `${100 / currentText.features.length}%`,
                  background: feature.bg,
                }}
              >
                {icons[index]}

                <div className={`layout-card-title ${lang !== "en" ? "native-font" : ""}`}>
                  {feature.title}
                </div>

                <p className="layout-p">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS INDICATORS */}
        <div className="layout-dots-container">
          {currentText.features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`layout-dot ${index === currentCard ? "active" : ""}`}
              style={{
                width: index === currentCard ? "24px" : "12px",
                borderRadius: index === currentCard ? "6px" : "50%",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE DATA ENTRY FORM */}
      <div className="layout-right">
        <form className="quote-form">
          <h2 className={`form-title ${lang !== "en" ? "native-font" : ""}`} style={{ marginBottom: "25px" }}>
            {currentText.formTitle}
          </h2>

          <input
            className="form-input"
            type="text"
            placeholder={currentText.inputName}
            required
          />

          <input
            className="form-input"
            type="email"
            placeholder={currentText.inputEmail}
            required
          />

          <input
            className="form-input"
            type="tel"
            placeholder={currentText.inputPhone}
            required
          />

          <input
            className="form-input file-input"
            type="file"
          />

          <textarea
            className="form-textarea"
            placeholder={lang === "en" ? "Comments" : "टिप्पणियाँ"}
          ></textarea>

          <button
            type="submit"
            className="form-submit-btn"
          >
            {currentText.btnSubmit}
          </button>
        </form>
      </div>

      {/* RESPONSIVE INTERNAL CSS UPGRADES */}
      <style>{`
        .main-layout-section {
          width: 100%;
          min-height: 100vh;
          padding: 80px 6%;
          display: flex;
          flex-direction: row;
          gap: 50px;
          position: relative;
          overflow: hidden;
          color: white;
          font-family: 'Smooch Sans', sans-serif;
          box-sizing: border-box;
          align-items: flex-start;
          background-image: url('https://t3.ftcdn.net/jpg/05/33/04/50/240_F_533045037_8lMPveQYe4gVEH5peMajGo4tlrpYbQuH.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .layout-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82));
          z-index: 0;
        }

        .layout-left {
          flex: 1 1 600px;
          position: relative;
          z-index: 2;
          min-width: 300px;
        }

        .layout-right {
          flex: 1 1 350px;
          position: relative;
          z-index: 2;
          min-width: 300px;
        }

        .layout-h1 {
          font-size: clamp(2.2rem, 4.5vw, 4.2rem);
          margin-bottom: 25px;
          font-weight: 700;
          line-height: 1.2;
        }

        .layout-h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          margin-top: 60px;
          margin-bottom: 30px;
          font-weight: 700;
          line-height: 1.3;
        }

        .layout-p {
          color: #e2e8f0;
          line-height: 1.7;
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          font-weight: 300;
          font-family: sans-serif;
        }

        /* Hindi Script Overrides */
        .native-font {
          font-family: sans-serif !important;
          letter-spacing: 0px !important;
          line-height: 1.4 !important;
        }

        /* Slider Structures */
        .layout-slider-window {
          width: 100%;
          max-width: 550px;
          overflow: hidden;
          margin-top: 25px;
          border-radius: 22px;
        }

        .layout-slider-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .layout-card {
          padding: 30px;
          box-sizing: border-box;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 35px rgba(0,0,0,0.25);
          border-radius: 22px;
        }

        .layout-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        /* Dots Pagination UI Elements */
        .layout-dots-container {
          display: flex;
          gap: 10px;
          margin-top: 25px;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          max-width: 550px;
          position: relative;
          z-index: 3;
        }

        .layout-dot {
          height: 12px;
          border: none;
          cursor: pointer;
          padding: 0;
          background: rgba(255,255,255,0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .layout-dot.active {
          background: #00bfff;
          box-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
        }

        /* Dynamic Input Form Wrapper */
        .quote-form {
          background: rgba(255,255,255,0.07);
          padding: 35px;
          border-radius: 25px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          position: sticky;
          top: 110px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 16px;
          margin-bottom: 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.15);
          outline: none;
          font-size: 0.95rem;
          box-sizing: border-box;
          background: rgba(255, 255, 255, 0.95);
          color: #1e293b;
          font-family: sans-serif;
        }

        .file-input {
          padding: 12px;
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px dashed rgba(255,255,255,0.3);
          cursor: pointer;
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg,#007bff,#00bfff);
          color: white;
          vertical-align: middle;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0,123,255,0.25);
          transition: all 0.3s ease;
          font-family: sans-serif;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,123,255,0.4);
        }

        /* ===================================================
           MEDIA QUERY BREAKPOINTS
           =================================================== */

        @media (max-width: 1100px) {
          .main-layout-section {
            padding: 60px 5%;
            gap: 40px;
          }
          .quote-form {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 992px) {
          .main-layout-section {
            flex-direction: column;
            padding: 60px 5%;
          }
          .layout-left, .layout-right {
            width: 100%;
            flex: 1 1 auto;
          }
          .layout-slider-window, .layout-dots-container {
            max-width: 100%;
          }
          .layout-dots-container {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .main-layout-section {
            padding: 50px 20px;
          }
          .quote-form, .layout-card {
            padding: 22px;
            border-radius: 18px;
          }
          .form-input, .form-textarea {
            padding: 14px;
            margin-bottom: 14px;
          }
          .form-submit-btn {
            padding: 14px;
          }
        }
      `}</style>
    </section>
  );
}

export default MainLayout;