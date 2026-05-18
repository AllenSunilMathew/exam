import React from "react";

// Import Logo
import logo from "../assets/logoo.png";

function Header() {
  return (
    <>
      <header className="header">

        {/* Logo */}
        <div className="logo-section">
          <img
            className="logo"
            src={logo}
            alt="Company Logo"
          />
        </div>

        {/* Right Side */}
        <div className="header-right">

          {/* Phone Number */}
          <a href="tel:+919876543210" className="phone">
            +91 98765 43210
          </a>

          {/* CTA Button */}
          <button className="quote-btn">
            Request a Quote
          </button>

        </div>
      </header>

      {/* Internal CSS */}
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Arial, sans-serif;
        }

        .header{
          width:100%;
          padding:18px 60px;

          display:flex;
          justify-content:space-between;
          align-items:center;

          background:white;

          box-shadow:0 2px 10px rgba(0,0,0,0.08);

          position:sticky;
          top:0;
          z-index:1000;
        }

        .logo-section{
          display:flex;
          align-items:center;
        }

        .logo{
          height:60px;
          width:auto;
          object-fit:contain;
        }

        .header-right{
          display:flex;
          align-items:center;
          gap:25px;
        }

        .phone{
          text-decoration:none;
          color:#111;
          font-size:16px;
          font-weight:500;
        }

        .quote-btn{
          padding:12px 24px;

          border:none;
          border-radius:10px;

          background:#111;
          color:white;

          font-size:15px;
          font-weight:600;

          cursor:pointer;

          transition:0.3s ease;
        }

        .quote-btn:hover{
          transform:translateY(-2px);
          opacity:0.9;
        }

        /* Mobile Responsive */

        @media(max-width:768px){

          .header{
            padding:15px 20px;
          }

          .phone{
            display:none;
          }

          .quote-btn{
            padding:10px 18px;
            font-size:14px;
          }

          .logo{
            height:45px;
          }

        }

      `}</style>
    </>
  );
}

export default Header;