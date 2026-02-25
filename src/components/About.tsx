import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const firstLineRefs = useRef<HTMLSpanElement[]>([]);
  const secondLineRefs = useRef<HTMLSpanElement[]>([]);

  const firstTextLines = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Deleniti hic optio doloremque, maxime laborum provident magni,",
    "velit assumenda natus dignissimos suscipit adipisci nobis",
    "dolores, sequi possimus eligendi ex facere",
    "inventore!",
  ];

  const secondTextLines = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Deleniti hic optio doloremque, maxime laborum provident magni,",
    "velit assumenda natus dignissimos suscipit adipisci nobis",
    "dolores, sequi possimus eligendi ex facere",
    "inventore!",
  ];

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(firstLineRefs.current, { yPercent: 0, autoAlpha: 1 });
      gsap.set(secondLineRefs.current, { yPercent: 200, autoAlpha: 0 });

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
          yPercent: 200,
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen px-4 lg:px-8 flex items-center justify-center"
    >
      <div className="relative text-center text-4xl max-w-5xl mx-auto ">
        <p className="leading-relaxed">
          {firstTextLines.map((line, index) => (
            <span key={`first-${index}`} className="block overflow-hidden">
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
            </span>
          ))}
        </p>
        <p className="absolute inset-0 leading-relaxed">
          {secondTextLines.map((line, index) => (
            <span key={`second-${index}`} className="block overflow-hidden">
              <span
                ref={(element) => {
                  if (element) {
                    secondLineRefs.current[index] = element;
                  }
                }}
                className="block"
              >
                {line}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
