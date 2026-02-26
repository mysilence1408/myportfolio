import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";

export function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { name: "About", sectionId: "about" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
  ];
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
    gsap.set(".mode-toggle", {
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
        ".mode-toggle",
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        ".overlay-text",
        {
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
    <nav className=" fixed w-full p-4 lg:p-8 flex justify-between items-center z-60 font-story text-white mix-blend-difference">
      <div className="h-6 overflow-hidden">
        <div className="flex flex-col items-end overlay-text text-white dark:text-white">
          <span className="h-6">Front</span>
          <span className="h-6">End</span>
          <button className="h-6 cursor-pointer" onClick={() => scrollToTop()}>
            Front end Developer
          </button>
        </div>
      </div>
      <button
        className="mode-toggle cursor-pointer text-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="h-6 hidden lg:block">
        <div className="flex flex-col items-end nav-links z-0">
          {navLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToSection(link.sectionId)}
              className="h-6 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
