import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import AllLargeCards from "./components/Cards/LargeCard/AllLargeCards";
import AllSmallCards from "./components/Cards/SmallCard/AllSmallCards";
import HomeLegend from "./components/Fillers/HomeLegend";

function App() {
  return (
    <div>
      <Navbar />
      <HomeLegend />
      <AllLargeCards />
      <AllSmallCards />
    </div>
  );
}

export default App;
