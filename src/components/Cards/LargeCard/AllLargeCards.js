import React from "react";
import LargeCard from "./LargeCard";
import iphone15 from "../../../assets/iphone_15_desktop.png";
import iphone15pro from "../../../assets/iphone15pro.png";
function AllLargeCards() {
  return (
    <div>
      <LargeCard
        product={{
          name: "iPhone 15 Pro",
          update: "Titanium. So strong. So light. So Pro",
          img: iphone15pro,
          imgX: "center",
          imgY: "0px",
          fontColor: "#fff",
          bgColor: "#000",
        }}
      />
      <LargeCard
        product={{
          name: "iPhone 15",
          update: "New Camera. New Design. New Euphoria",
          img: iphone15,
          imgX: "center",
          imgY: "50px",
          fontColor: "#000",
          bgColor: "#fff",
        }}
      />
    </div>
  );
}

export default AllLargeCards;
