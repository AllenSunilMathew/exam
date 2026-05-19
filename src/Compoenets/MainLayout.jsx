import React, { useState, useEffect } from "react";
import { 
  FaCogs, 
  FaTools, 
  FaShieldAlt, 
  FaIndustry, 
  FaCar, 
  FaBuilding, 
  FaChevronRight, 
  FaFileAlt 
} from "react-icons/fa";

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
      workflowsTitle: "Comprehensive Scan-to-CAD Workflows for Every Industry",
      industries: [
        { title: "Mining & Heavy Industry", desc: "Heavy machinery wear-analysis, casting re-engineering, and large-scale plant asset modifications." },
        { title: "Automotive & Aerospace", desc: "Aerodynamic surface mapping, legacy restoration, and precision tool tooling verification." },
        { title: "Manufacturing", desc: "Injection mold restorations, component optimization, and rapid production line configuration." },
        { title: "Architecture & Heritage", desc: "Building scan conversions, asset archiving, and historic structural restoration models." },
      ],
      processTitle: "Our 3-Step Reverse Engineering Process",
      steps: [
        { num: "01", name: "Precision 3D Scanning", desc: "Capturing millions of high-density geometric surface metrics with sub-millimeter accurate hardware." },
        { num: "02", name: "Point Cloud Processing", desc: "Aligning, cleaning, and validating raw multi-scan coordinate matrices into flawless global mesh files." },
        { num: "03", name: "Parametric Modeling", desc: "Extracting geometric intent to generate fully features-based, production-ready parametric CAD trees." },
      ],
      filesTitle: "Native Files for Your Existing Workflow",
      ctaTitle: "Ready to Start Your Project? Get a Rapid Quote Today",
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
          text: "अनुयोगी मेश डेटा (mesh data) को संपादन योग्य और पूरी तरह से पैरामीट्रिक CAD मॉडल में बदलें।",
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
      workflowsTitle: "हर उद्योग के लिए व्यापक स्कैन-टू-कैड (Scan-to-CAD) वर्कफ़्लो",
      industries: [
        { title: "खनन और भारी उद्योग", desc: "भारी मशीनरी घिसाव विश्लेषण, कास्टिंग री-इंजीनियरिंग और बड़े पैमाने पर संयंत्र परिसंपत्ति संशोधन।" },
        { title: "ऑटोमोटिव और एयरोस्पेस", desc: "एयरोडायनामिक सतह मैपिंग, विरासत बहाली, और सटीक टूल टूलींग सत्यापन।" },
        { title: "विनिर्माण", desc: "इंजेक्शन मोल्ड रिस्टोरेशन, घटक अनुकूलन, और रैपिड प्रोडक्शन लाइन कॉन्फ़िगरेशन।" },
        { title: "आर्किटेक्चर और हेरिटेज", desc: "बिल्डिंग स्कैन रूपांतरण, एसेट आर्काइविंग और ऐतिहासिक संरचनात्मक बहाली मॉडल।" },
      ],
      processTitle: "हमारी 3-चरण रिवर्स इंजीनियरिंग प्रक्रिया",
      steps: [
        { num: "01", name: "सटीक 3D स्कैनिंग", desc: "उप-मिल्लीमीटर सटीक हार्डवेयर के साथ लाखों उच्च-घनत्व ज्यामितीय सतह मेट्रिक्स को कैप्चर करना।" },
        { num: "02", name: "पॉइंट क्लाउड प्रोसेसिंग", desc: "कच्चे मल्टी-स्कैन समन्वय मेट्रिसेस को निर्दोष वैश्विक मेश फ़ाइलों में संरेखित करना, साफ़ करना और मान्य करना।" },
        { num: "03", name: "पैरामीट्रिक मॉडलिंग", desc: "पूरी तरह से सुविधाओं-आधारित, उत्पादन-तैयार पैरामीट्रिक सीएडी पेड़ उत्पन्न करने के लिए ज्यामितीय इरादे को निकालना।" },
      ],
      filesTitle: "आपके मौजूदा वर्कफ़्लो के लिए मूल फ़ाइलें",
      ctaTitle: "अपना प्रोजेक्ट शुरू करने के लिए तैयार हैं? आज ही रैपिड कोट प्राप्त करें",
    },
  };

  const currentText = translations[lang] || translations["en"];

  // Slider feature icons
  const icons = [
    <FaCogs style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#00bfff" }} />,
    <FaTools style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#00ffaa" }} />,
    <FaShieldAlt style={{ fontSize: "2.8rem", marginBottom: "18px", color: "#ffb347" }} />
  ];

  // Industry Section Icons
  const industryIcons = [
    <FaIndustry style={{ fontSize: "2rem", color: "#00bfff" }} />,
    <FaCar style={{ fontSize: "2rem", color: "#00ffaa" }} />,
    <FaCogs style={{ fontSize: "2rem", color: "#ffb347" }} />,
    <FaBuilding style={{ fontSize: "2rem", color: "#ec4899" }} />
  ];

  const nativeFiles = ["SolidWorks", "Autodesk Inventor", "Solid Edge", "STEP", "IGES", "Parasolid"];

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

      <div className="layout-container">
        {/* TOP HERO COLUMN SPLIT */}
        <div className="hero-split-row">
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
            <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
              <h2 className={`form-title ${lang !== "en" ? "native-font" : ""}`} style={{ marginBottom: "25px" }}>
                {currentText.formTitle}
              </h2>

              <input className="form-input" type="text" placeholder={currentText.inputName} required />
              <input className="form-input" type="email" placeholder={currentText.inputEmail} required />
              <input className="form-input" type="tel" placeholder={currentText.inputPhone} required />
              <input className="form-input file-input" type="file" />
              <textarea className="form-textarea" placeholder={lang === "en" ? "Comments" : "टिप्पणियाँ"}></textarea>

              <button type="submit" className="form-submit-btn">
                {currentText.btnSubmit}
              </button>
            </form>
          </div>
        </div>

        {/* SECTION: SCAN-TO-CAD WORKFLOWS FOR INDUSTRIES */}
        <div className="content-block-section">
          <h2 className="section-global-h2">{currentText.workflowsTitle}</h2>
          <div className="industry-grid">
            {currentText.industries.map((item, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon-wrapper">{industryIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: 3-STEP REVERSE ENGINEERING PROCESS */}
        <div className="content-block-section">
          <h2 className="section-global-h2">{currentText.processTitle}</h2>
          <div className="process-flow-row">
            {currentText.steps.map((step, index) => (
              <div key={index} className="process-step-node">
                <div className="process-badge-header">
                  <span className="step-number">{step.num}</span>
                  {index < 2 && <FaChevronRight className="step-arrow-icon" />}
                </div>
                <h3>{step.name}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: NATIVE FILES COMPATIBILITY BANNER */}
        <div className="content-block-section file-compatibility-wrap">
          <h2 className="section-global-h2">{currentText.filesTitle}</h2>
          <div className="files-tag-cloud">
            {nativeFiles.map((file, idx) => (
              <span key={idx} className="file-tag">
                <FaFileAlt style={{ marginRight: "8px", color: "#00bfff" }} />
                {file}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION: CALL TO ACTION SECTION */}
        <div className="cta-action-banner">
          <h2>{currentText.ctaTitle}</h2>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cta-pulse-button">
            Get Started Now
          </button>
        </div>

      </div>

      {/* RESPONSIVE INTERNAL CSS UPGRADES */}
      <style>{`
        .main-layout-section {
          width: 100%;
          min-height: 100vh;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          color: white;
          font-family: 'Smooch Sans', sans-serif;
          box-sizing: border-box;
          background-image: url('https://t3.ftcdn.net/jpg/05/33/04/50/240_F_533045037_8lMPveQYe4gVEH5peMajGo4tlrpYbQuH.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .layout-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0,0,0,0.82), rgba(11,19,32,0.95));
          z-index: 0;
        }

        .layout-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 4%;
          position: relative;
          z-index: 2;
        }

        .hero-split-row {
          display: flex;
          flex-direction: row;
          gap: 50px;
          align-items: flex-start;
          width: 100%;
        }

        .layout-left {
          flex: 1 1 600px;
          min-width: 300px;
        }

        .layout-right {
          flex: 1 1 380px;
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
          margin-top: 40px;
          margin-bottom: 20px;
          font-weight: 700;
          line-height: 1.3;
          color: #00bfff;
        }

        .section-global-h2 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          margin-bottom: 35px;
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.5px;
        }

        .layout-p {
          color: #e2e8f0;
          line-height: 1.7;
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          font-weight: 300;
          font-family: sans-serif;
        }

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

        .layout-dots-container {
          display: flex;
          gap: 10px;
          margin-top: 25px;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          max-width: 550px;
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
          background: rgba(255,255,255,0.06);
          padding: 35px;
          border-radius: 25px;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          position: sticky;
          top: 40px;
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
          min-height: 100px;
          resize: vertical;
        }

        .form-submit-btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg,#007bff,#00bfff);
          color: white;
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

        /* NEW WORKFLOW SECTIONS UNIQUE DESIGNS */
        .content-block-section {
          margin-top: 90px;
          width: 100%;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .industry-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 30px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.08);
        }

        .industry-icon-wrapper {
          margin-bottom: 20px;
        }

        .industry-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .industry-card p {
          font-family: sans-serif;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* 3-STEP PROCESS TIMELINE DESIGNS */
        .process-flow-row {
          display: flex;
          flex-direction: row;
          gap: 30px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .process-step-node {
          flex: 1 1 280px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }

        .process-badge-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .step-number {
          font-size: 2rem;
          font-weight: 800;
          color: #00ffaa;
          background: rgba(0, 255, 170, 0.1);
          padding: 2px 14px;
          border-radius: 10px;
        }

        .step-arrow-icon {
          color: rgba(255,255,255,0.2);
          font-size: 1.3rem;
        }

        .process-step-node h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .process-step-node p {
          font-family: sans-serif;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* EXTENDED FILE TAG CLOUDS */
        .file-compatibility-wrap {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center;
        }

        .files-tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin-top: 25px;
        }

        .file-tag {
          background: rgba(255,255,255,0.08);
          padding: 10px 20px;
          border-radius: 50px;
          font-family: sans-serif;
          font-weight: 600;
          font-size: 1rem;
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* CALL TO ACTION ACCENT BANNER */
        .cta-action-banner {
          margin-top: 90px;
          background: linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%);
          border-radius: 24px;
          padding: 50px 40px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(67, 100, 247, 0.3);
        }

        .cta-action-banner h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 25px;
          line-height: 1.3;
        }

        .cta-pulse-button {
          background: #ffffff;
          color: #4364f7;
          border: none;
          padding: 16px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 14px;
          cursor: pointer;
          font-family: sans-serif;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-pulse-button:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }

        /* ===================================================
            MEDIA QUERY BREAKPOINTS
           =================================================== */
        @media (max-width: 1100px) {
          .hero-split-row {
            gap: 40px;
          }
          .quote-form {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 992px) {
          .hero-split-row {
            flex-direction: column;
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
          .step-arrow-icon {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .main-layout-section {
            padding: 50px 0;
          }
          .quote-form, .layout-card, .industry-card, .process-step-node, .file-compatibility-wrap {
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
          .cta-action-banner {
            padding: 35px 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default MainLayout;