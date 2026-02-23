import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.85,0,0.15,1");

export function Hero() {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const counter = { value: 0 };

    const counterTl = gsap.timeline({ delay: 0.5 });
    const overlayTextTl = gsap.timeline({ delay: 0.75 });
    const revealTl = gsap.timeline({ delay: 0.5 });

    counterTl.to(counter, {
      value: 100,
      duration: 5,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(counter.value).toString();
        }
      },
    });

    // Set initial states
    gsap.set(".img", {
      y: 100,
      opacity: 0,
      scale: 0.8,
    });

    revealTl
      .to(".img", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "hop",
      })
      .to(".hero-images-container", {
        gap: "0.75vw",
        duration: 1,
        delay: 0.5,
        ease: "hop",
      })
      .to(
        ".img",
        {
          scale: 1,
          duration: 1,
          ease: "hop",
        },
        "<",
      )
      .to(".img:not(.hero-img)", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "hop",
      })
      .to(".hero-img", {
        scale: 2,
        duration: 1,
        ease: "hop",
      })
      .to(".hero-overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "hop",
      })
      .to(
        ".hero-header",
        {
          y: "0",
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5",
      );

    return () => {
      counterTl.kill();
      overlayTextTl.kill();
      revealTl.kill();
    };
  }, []);

  return (
    <section className=" relative w-full h-svh overflow-hidden">
      <div
        className=" fixed w-full h-svh bg-black z-0 hero-overlay"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          willChange: "clip-path",
        }}
      >
        <div className=" absolute right-8 bottom-8 text-white">
          <h1 ref={counterRef} className="text-[4rem] font-bold">
            0
          </h1>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 px-8 hero-images-container">
        <div className="h-36 w-24 overflow-hidden img">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-36 w-24 overflow-hidden img">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-44 w-28 overflow-hidden img hero-img">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-36 w-24 overflow-hidden img">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-36 w-24 overflow-hidden img">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" uppercase text-center text-[15vw] hero-header">
        <h1>Ashkan Kohandel</h1>
      </div>
    </section>
  );
}
