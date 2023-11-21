import "./App.css";
import LargeCard from "./components/LargeCard/LargeCard";
import Navbar from "./components/Navbar/Navbar";
import { MdArrowForwardIos } from "react-icons/md";
import iphone15 from "./assets/iphone_15_desktop.png";
import macLap from "./assets/macbook-pro.png";
import iphone15pro from "./assets/iphone-15-pro_overview__f8jz7aagka2q_og.png";

function App() {
  return (
    <div>
      <Navbar />
      <div
        className="emi-info"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>
          Save up to ₹8000.00 instantly on eligible products with HDFC Bank
          Credit Cards.* Plus No Cost EMI from most leading banks.<sup>‡</sup>
          <a>
            {" "}
            Shop Now
            <MdArrowForwardIos className="arrow" />
          </a>
        </h4>
      </div>
      <LargeCard
        product={{
          name: "iPhone 15 Pro",
          update: "Titanium. So strong. So light. So Pro",
          img: iphone15pro,
          imgX: "center",
          imgY: "80px",
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
          imgY: "210px",
          fontColor: "#000",
          bgColor: "#fff",
        }}
      />
      {/* <LargeCard
        product={{
          name: "MacBook Pro",
          update: "Mind-blowing.Head-turning.",
          img: macLap,
          imgX: "center",
          imgY: "100px",
          fontColor: "#000",
          bgColor: "#fff",
        }}
      /> */}
    </div>
  );
}

export default App;
