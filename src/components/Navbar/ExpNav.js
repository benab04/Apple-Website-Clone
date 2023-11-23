import React, { useState } from "react";
import { motion } from "framer-motion";
function ExpNav({ on }) {
  const on1 = on;
  const [exp, switchOn] = useState(on1);
  const containerVariants = {
    expanded: {
      height: "inherit",
      transition: {
        duration: 0.5,
      },
    },
    collapsed: {
      height: 0,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      className="expanded-nav"
      initial="collapsed"
      animate={
        exp
          ? () => {
              // console.log(exp);
              return "expanded";
            }
          : () => {
              console.log(exp);
              return "collapsed";
            }
      }
      onMouseLeave={() => {
        switchOn(!on1);
        console.log(exp);
      }}
      variants={containerVariants}
    >
      <div className="expanded-nav-outer">
        <div className="exp-nav-section exp-main-section">
          <div>
            <h3 className="exp-title">Shop</h3>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Shop the Latest
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Mac
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              iPad
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              iPhone
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Apple Watch
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Accessories
            </a>
          </div>
        </div>
        <div className="exp-nav-section exp-sub-section">
          <div>
            <h3 className="exp-title">Quick Links</h3>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Find a Store
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Order Status
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Ways to Buy
            </a>
          </div>
        </div>
        <div className="exp-nav-section exp-sub-section">
          <div>
            <h3 className="exp-title">Shop Special Stores</h3>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Education
            </a>
          </div>
          <div>
            <a href="/" className="exp-nav-link">
              Business
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ExpNav;
