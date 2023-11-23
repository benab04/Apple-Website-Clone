import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import "./Navbar.css";
import ExpNav from "./ExpNav";
function Navbar() {
  const [expandNav, setOn] = useState(false);
  function collapseNav() {
    const animateDiv = document.getElementsByClassName("expanded-nav");
    animateDiv.height = 0;
  }

  return (
    <div>
      <div className="header">
        <div className="navbar">
          <a href="/" className="icon">
            <FaApple />
          </a>
          <a
            href="/"
            className="nav-link"
            onMouseOver={() => {
              setOn(true);
            }}
          >
            Store
          </a>
          <a href="/" className="nav-link">
            Mac
          </a>
          <a href="/" className="nav-link">
            iPad
          </a>
          <a href="/" className="nav-link">
            iPhone
          </a>
          <a href="/" className="nav-link">
            Watch
          </a>
          <a href="/" className="nav-link">
            AirPods
          </a>
          <a href="/" className="nav-link">
            TV & Home
          </a>
          <a href="/" className="nav-link">
            Entertainment
          </a>
          <a href="/" className="nav-link">
            Accessories
          </a>
          <a href="/" className="nav-link">
            Support
          </a>
          <a href="/" className="icon">
            <IoIosSearch />
          </a>
          <a href="/" className="icon">
            <IoBagOutline />
          </a>
        </div>
      </div>
      {expandNav ? (
        <div
          onMouseLeave={() => {
            collapseNav();
            setOn(false);
          }}
        >
          <ExpNav on={expandNav} />
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
