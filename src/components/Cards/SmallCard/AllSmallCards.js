import React from "react";
import iMac from "../../../assets/iMac_large.jpg";
import macLap from "../../../assets/macbook-pro.png";
import ipad from "../../../assets/ipadlarge.jpg";
import watch_ultra2 from "../../../assets/watchultra2.jpg";
import { FaApple } from "react-icons/fa";

import "./AllSmallCards.css";
import SmallCard from "./SmallCard";
function AllSmallCards() {
  const watch_title = `<h1 style="font-size:36px;padding:0; font-family:'Roboto',sans serif;font-weight:900;margin:0 0 0 0">
  <i class="fa-brands fa-apple"></i><span 
  style="font-size:32px;padding:0; font-family:'Open Sans',sans serif;font-weight:800;margin:0 0 0 3px"
  >WATCH</span><br>
  <p style="text-align:center; color:#FD8B49; font-size:14px;margin:0;margin-top:3px;padding:0; margin-bottom:-35px; letter-spacing:2px;font-weight:700">
  ULTRA 2
  <p>
  </h1>`;
  return (
    <div className="all-small-cards">
      <SmallCard
        product={{
          name: "MacBook Pro",
          update: "Mind-blowing.Head-turning.",
          img: macLap,
          imgX: "center",
          imgY: "50px",
          fontColor: "#000",
          bgColor: "#fff",
          scale: "cover",
        }}
      />
      <SmallCard
        product={{
          name: "iMac",
          update: "Packed with more juice",
          img: iMac,
          imgX: "center",
          imgY: "180px",
          fontColor: "#000",
          bgColor: "#fff",
          scale: "70%",
        }}
      />
      <SmallCard
        product={{
          name: "iPad",
          update: "Lovable. Drawable. Magical",
          img: ipad,
          imgX: "center",
          imgY: "200px",
          fontColor: "#000",
          bgColor: "#fff",
          scale: "40%",
        }}
      />
      <SmallCard
        product={{
          name: watch_title,
          update: "Next-level adventure",
          img: watch_ultra2,
          imgX: "center",
          imgY: "140px",
          fontColor: "#000",
          scale: "105%",
          bgColor: "#fff",
        }}
      />
    </div>
  );
}

export default AllSmallCards;
