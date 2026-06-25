import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Image() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, {
        clipPath: "inset(10% 0% 10% 0%)",
        webkitClipPath: "inset(10% 0% 10% 0%)",
      });

      gsap.to(containerRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        webkitClipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <img
        className="w-full lg:h-[300vh] block object-cover"
        src="./images/coding.png"
        alt="Coding Image"
      />
    </div>
  );
}
