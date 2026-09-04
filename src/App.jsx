import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.jsx";
import Marketplace from "./Pages/Marketplace/Marketplace.jsx";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;