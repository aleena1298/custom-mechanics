import { BrowserRouter, Routes, Route } from "react-router-dom";

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
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/accessories"
          element={<Accessories />}
        />

        <Route
          path="/tcd"
          element={<TCDTesting />}
        />

        <Route
          path="/accidentrepair"
          element={<AccidentRepair />}
        />

        <Route 
        path="/batteryreplacement"
        element={<BikeAndBatteryReplacement />}
        />

        <Route
          path="/brakerepair"
          element={<BrakeRepair />}
        />

        <Route
          path="/carburetorandoil"
          element={<CarbeuretorAndOil />}
        />

        <Route 
         path="/enginerepair"
         element={<EngineRepair />}
        />

        <Route 
        path="/booknow"
        element={<BookNow/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;