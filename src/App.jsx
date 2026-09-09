import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Marketplace from "./Pages/Marketplace/Marketplace.jsx";
import Accessories from "./Pages/Accessories/Accessories.jsx";
import TCDTesting from "./Pages/TCDTesting/TCDTesting.jsx";
import AccidentRepair from "./Pages/AccidentRepair/AccidentRepair.jsx";
import BikeAndBatteryReplacement from "./Pages/BikeAndBatteryReplacement/BikeAndBatteryReplacement.jsx";
import BrakeRepair from "./Pages/BrakeRepair/BrakeRepair.jsx";
import CarbeuretorAndOil from "./Pages/CarbeuretorAndOil/CarbeuretorAndOil.jsx";
import EngineRepair from "./Pages/EngineRepair/EngineRepair.jsx";
import BookNow from "./Pages/BookNow/BookNow.jsx";

// React Router doesn't scroll to an element when a route changes to a URL
// with a #hash (it only does this on a real full-page load). This listens
// for hash changes and scrolls the target element into view, so links like
// "/#services" actually land on the right section instead of just the top
// of the page.
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const id = hash.replace("#", "");

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    const timer1 = setTimeout(scrollToTarget, 200);
    const timer2 = setTimeout(scrollToTarget, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/tcdtesting" element={<TCDTesting />} />
        <Route path="/accidentrepair" element={<AccidentRepair />} />
        <Route
          path="/batteryreplacement"
          element={<BikeAndBatteryReplacement />}
        />
        <Route path="/brakerepair" element={<BrakeRepair />} />
        <Route path="/carburetorandoil" element={<CarbeuretorAndOil />} />
        <Route path="/enginerepair" element={<EngineRepair />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
