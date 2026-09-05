import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Marketplace from "./Pages/Marketplace/Marketplace.jsx";
import Accessories from "./Pages/Accessories/Accessories.jsx";
import TCDTesting from "./Pages/TCDTesting/TCDTesting.jsx";
import AccidentRepair from "./Pages/AccidentRepair/AccidentRepair.jsx";
import BikeAndBatteryReplacement from "./Pages/BikeAndBatteryReplacement/BikeAndBatteryReplacement.jsx";
import BrakeRepair from "./Pages/BrakeRepair/BrakeRepair.jsx";
import CarbeuratorAndOil from "./Pages/CarbeuratorAndOil/CarbeuratorAndOil.jsx";
import EngineRepair from "./Pages/EngineRepair/EngineRepair.jsx";
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
          path="/accident-repair"
          element={<AccidentRepair />}
        />

        <Route 
        path="/battery-replacement"
        element={<BikeAndBatteryReplacement />}
        />

        <Route
          path="/brake-repair"
          element={<BrakeRepair />}
        />

        <Route
          path="/carburetorandoil"
          element={<CarbeuratorAndOil />}
        />

        <Route 
         path="/enginerepair"
         element={<EngineRepair />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;