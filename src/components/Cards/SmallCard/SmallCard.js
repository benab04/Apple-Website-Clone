import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./SmallCard.css";

function SmallCard({ product }) {
  const style = {
    backgroundImage: `url(${product.img})`,
    backgroundPositionY: `${product.imgY}`,
    backgroundPositionX: `${product.imgX}`,
    backgroundColor: `${product.bgColor}`,
    backgroundSize: `${product.scale}`,
    color: `${product.fontColor}`,
  };
  return (
    <div>
      <a href="/" style={{ textDecoration: "none" }}>
        <div style={style} className="small-card">
          <h1
            dangerouslySetInnerHTML={{ __html: product.name }}
            className="product-name-s"
          >
            {/* {product.name} */}
          </h1>
          <h2 className="product-update-s">{product.update}</h2>
          <div className="product-options-s">
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
    </div>
  );
}

export default SmallCard;
