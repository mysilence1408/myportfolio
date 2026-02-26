import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect, useLayoutEffect, useMemo } from "react";
import ReactLenis, { useLenis } from "lenis/react";

function App() {
  const lenis = useLenis();
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

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, {
      immediate: true,
      duration: 0,
      lock: true,
      force: true,
    });
  }, [lenis]);
  return (
    <ReactLenis root options={lenisOptions}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
