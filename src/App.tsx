import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect, useLayoutEffect } from "react";
import ReactLenis, { useLenis } from "lenis/react";

function App() {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ReactLenis>
  );
}

export default App;
