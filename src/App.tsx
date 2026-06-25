import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

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
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, location]);

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
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
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
