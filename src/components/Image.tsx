import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Image() {
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!imgRef.current) return;

    gsap.to(imgRef.current, {
      y: "-25%",
      ease: "none",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <img
        ref={imgRef}
        className="w-full h-full object-cover"
        src="https://clarissahulse.com/cdn/shop/files/120395SummerBorderRainbow-BOTANICOCC070-031-ROOMSETWEB.jpg?v=1752585889"
        alt="Traveling Image"
      />
    </>
  );
}
