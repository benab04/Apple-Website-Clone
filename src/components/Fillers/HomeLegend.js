import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

function HomeLegend() {
  return (
    <div
      className="emi-info"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>
        Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit
        Cards.* Plus No Cost EMI from most leading banks.<sup>‡</sup>
        <a>
          {" "}
          Shop Now
          <MdArrowForwardIos className="arrow" />
        </a>
      </h4>
    </div>
  );
}

export default HomeLegend;
