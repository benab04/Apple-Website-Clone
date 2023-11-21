import React from "react";

function ExpNav() {
  return (
    <div className="expanded-nav">
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
    </div>
  );
}

export default ExpNav;
