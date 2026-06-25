import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstLineRefs = useRef<HTMLSpanElement[]>([]);
  const secondLineRefs = useRef<HTMLSpanElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const firstTextLines = [
    "I'm Ashkan, a Front-End Engineer and Master's student passionate about building",
    "modern digital experiences that combine thoughtful design, intuitive interactions,",
    "clean architecture, and smooth animations to create products people genuinely enjoy.",
  ];

  const secondTextLines = [
    "Beyond software development, I'm deeply interested in Human-AI Interaction, intelligent",
    "systems, and user-centred design, exploring how emerging technologies can improve",
    "everyday experiences and create meaningful value for both people and organizations.",
  ];

  useEffect(() => {
    const mobileQuery = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)",
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
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (isMobile) {
        gsap.set(firstLineRefs.current, { yPercent: 0, autoAlpha: 1 });
        gsap.set(secondLineRefs.current, { yPercent: 0, autoAlpha: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=80%",
              scrub: true,
              pin: true,
            },
          })
          .to({}, { duration: 0.35 })
          .to(firstLineRefs.current, {
            autoAlpha: 0,
            duration: 0.2,
            ease: "none",
          })
          .to(
            secondLineRefs.current,
            {
              autoAlpha: 1,
              duration: 0.2,
              ease: "none",
            },
            "<0.05",
          );

        return;
      }

      gsap.set(firstLineRefs.current, { yPercent: 0, autoAlpha: 1 });
      gsap.set(secondLineRefs.current, { yPercent: 100, autoAlpha: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
            pin: true,
          },
        })
        .to(firstLineRefs.current, {
          yPercent: -200,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.inOut",
        })
        .to(
          secondLineRefs.current,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "<",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      ref={sectionRef}
      className="h-screen px-4 lg:px-8 flex items-center justify-center"
    >
      <div className="text-center text-4xl max-w-7xl mx-auto leading-relaxed w-full">
        {firstTextLines.map((line, index) => (
          <span
            key={`line-${index}`}
            className="relative block overflow-hidden"
          >
            <span
              ref={(element) => {
                if (element) {
                  firstLineRefs.current[index] = element;
                }
              }}
              className="block"
            >
              {line}
            </span>
            <span
              ref={(element) => {
                if (element) {
                  secondLineRefs.current[index] = element;
                }
              }}
              className="absolute inset-0 block"
            >
              {secondTextLines[index]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
