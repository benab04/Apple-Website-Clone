import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./LargeCard.css";
function LargeCard({ product }) {
  const style = {
    backgroundImage: `url(${product.img})`,
    backgroundPositionY: `${product.imgY}`,
    backgroundPositionX: `${product.imgX}`,
    backgroundColor: `${product.bgColor}`,
    color: `${product.fontColor}`,
  };
  return (
    <a href="/" style={{ textDecoration: "none" }}>
      <div style={style} className="large-card">
        <h1 className="product-name">{product.name}</h1>
        <h2 className="product-update">{product.update}</h2>
        <div className="product-options">
          <h4>
            <a href="/">
              Learn More <MdArrowForwardIos className="arrow" />
            </a>
          </h4>
          <h4>
            <a href="/">
              Buy
              <MdArrowForwardIos className="arrow" />
            </a>
          </h4>
        </div>
      </div>
    </a>
  );
}

export default LargeCard;
