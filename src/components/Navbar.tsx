import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  useLayoutEffect(() => {
    const overlayTextTl = gsap.timeline({ delay: 0.75 });
    const navRevealTl = gsap.timeline({ delay: 6 }); // Sync with hero overlay disappearing

    // Set initial states
    gsap.set(".nav-links", {
      opacity: 0,
      pointerEvents: "none",
    });

    overlayTextTl.to(".overlay-text", {
      y: "0",
      duration: 0.75,
      ease: "hop",
    });
    overlayTextTl.to(".overlay-text", {
      y: "-1.5rem",
      duration: 0.75,
      ease: "hop",
      delay: 0.75,
    });
    overlayTextTl.to(".overlay-text", {
      y: "-3rem",
      duration: 0.75,
      ease: "hop",
      delay: 0.75,
    });

    // Reveal nav links and change left text color when overlay disappears
    navRevealTl
      .to(".nav-links", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        ".overlay-text",
        {
          color: "#8e8e8e",
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      );

    return () => {
      overlayTextTl.kill();
      navRevealTl.kill();
    };
  }, []);

  return (
    <nav className=" fixed w-full p-4 lg:p-8  flex justify-between items-start z-60 font-story">
      <div className="h-6 overflow-hidden">
        <div className="flex flex-col items-end overlay-text text-white dark:text-white">
          <a href="" className="h-6">
            Front
          </a>
          <a href="" className="h-6">
            End
          </a>
          <a href="" className="h-6">
            Font end Developer
          </a>
        </div>
      </div>
      <button
        className=" cursor-pointer text-sm"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="h-6">
        <div className="flex flex-col items-end nav-links z-0">
          <a href="" className="h-6">
            Home
          </a>
          <a href="" className="h-6">
            About
          </a>
          <a href="" className="h-6">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
