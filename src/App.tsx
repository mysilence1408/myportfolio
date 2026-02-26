import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import ReactLenis from "lenis/react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const lenisOptions = useMemo(
    () => ({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      infinite: false,
    }),
    [],
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      "(max-width: 1024px), (pointer: coarse)",
    );

    const updateIsMobile = () => {
      setIsMobile(mobileQuery.matches);
    };

    updateIsMobile();
    mobileQuery.addEventListener("change", updateIsMobile);

    return () => {
      mobileQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );

  return isMobile ? (
    routes
  ) : (
    <ReactLenis root options={lenisOptions}>
      {routes}
    </ReactLenis>
  );
}

export default App;
