import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

/* ===============================
   LAZY-LOADED PAGES
================================ */

const Home = lazy(() =>
  import("./Pages/Home/Home.jsx")
);

const Marketplace = lazy(() =>
  import("./Pages/Marketplace/Marketplace.jsx")
);

const Accessories = lazy(() =>
  import("./Pages/Accessories/Accessories.jsx")
);

const TCDTesting = lazy(() =>
  import("./Pages/TCDTesting/TCDTesting.jsx")
);

const AccidentRepair = lazy(() =>
  import("./Pages/AccidentRepair/AccidentRepair.jsx")
);

const BikeAndBatteryReplacement = lazy(() =>
  import(
    "./Pages/BikeAndBatteryReplacement/BikeAndBatteryReplacement.jsx"
  )
);

const BrakeRepair = lazy(() =>
  import("./Pages/BrakeRepair/BrakeRepair.jsx")
);

const CarbeuretorAndOil = lazy(() =>
  import("./Pages/CarbeuretorAndOil/CarbeuretorAndOil.jsx")
);

const EngineRepair = lazy(() =>
  import("./Pages/EngineRepair/EngineRepair.jsx")
);

const BookNow = lazy(() =>
  import("./Pages/BookNow/BookNow.jsx")
);

const NotFound = lazy(() =>
  import("./Pages/NotFound/NotFound.jsx")
);


/* ===============================
   SCROLL HANDLER
================================ */

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
      });

      return;
    }

    const id = hash.replace("#", "");

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const firstAttempt = setTimeout(
      scrollToTarget,
      200
    );

    const secondAttempt = setTimeout(
      scrollToTarget,
      800
    );

    return () => {
      clearTimeout(firstAttempt);
      clearTimeout(secondAttempt);
    };
  }, [hash, pathname]);

  return null;
}


/* ===============================
   LOADING FALLBACK
================================ */

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      Loading...
    </div>
  );
}


/* ===============================
   APP
================================ */

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* MAIN ROUTES */}

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
            path="/tcdtesting"
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
            element={<BookNow />}
          />

          {/* OLD URL REDIRECTS */}

          <Route
            path="/accident-repair"
            element={
              <Navigate
                to="/accidentrepair"
                replace
              />
            }
          />

          <Route
            path="/battery-replacement"
            element={
              <Navigate
                to="/batteryreplacement"
                replace
              />
            }
          />

          <Route
            path="/brake-repair"
            element={
              <Navigate
                to="/brakerepair"
                replace
              />
            }
          />

          <Route
            path="/tcd"
            element={
              <Navigate
                to="/tcdtesting"
                replace
              />
            }
          />

          {/* 404 */}

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;