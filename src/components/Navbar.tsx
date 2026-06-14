import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navToneClass = isHomePage
    ? "text-white mix-blend-difference"
    : "text-primary-dark dark:text-primary";

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
    if (!isHomePage) {
      gsap.set([".nav-links", ".mode-toggle"], {
        opacity: 1,
        pointerEvents: "auto",
      });

      return;
    }

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
  }, [isHomePage]);

  return (
    <nav
      className={`fixed w-full p-4 lg:p-8 flex justify-between items-center z-60 font-story ${navToneClass}`}
    >
      {isHomePage ? (
        <div className="h-6 overflow-hidden">
          <div className="flex flex-col items-start overlay-text text-white dark:text-white">
            <span className="h-6">Ashkan</span>
            <span className="h-6">Kohandel</span>
            <button
              className="h-6 cursor-pointer"
              onClick={() => scrollToTop()}
            >
              Front end Developer
            </button>
          </div>
        </div>
      ) : (
        <Link to="/" className="text-current text-sm sm:text-base">
          Front end Developer
        </Link>
      )}
      <button
        className="mode-toggle cursor-pointer text-sm text-current lg:absolute lg:left-1/2 lg:-translate-x-1/2"
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
              className="h-6 cursor-pointer text-current"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
