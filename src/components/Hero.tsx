import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(CustomEase, SplitText);
CustomEase.create("hop", "0.85,0,0.15,1");

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    let lockActive = true;

    const forceTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      lenis?.scrollTo(0, {
        immediate: true,
        duration: 0,
        lock: true,
        force: true,
      });
    };

    const preventScroll = (event: Event) => {
      if (!lockActive) {
        return;
      }

      event.preventDefault();
      forceTop();
    };

    const preventKeyScroll = (event: KeyboardEvent) => {
      if (!lockActive) {
        return;
      }

      const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];

      if (blockedKeys.includes(event.key)) {
        event.preventDefault();
        forceTop();
      }
    };

    const keepAtTop = () => {
      if (!lockActive) {
        return;
      }

      forceTop();
    };

    const unlockScroll = () => {
      if (!lockActive) {
        return;
      }

      lockActive = false;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeyScroll);
      window.removeEventListener("scroll", keepAtTop);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      lenis?.start();
      forceTop();
    };

    lenis?.stop();
    forceTop();
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeyScroll, { passive: false });
    window.addEventListener("scroll", keepAtTop, { passive: true });

    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      const counterTl = gsap.timeline({ delay: 0.5 });
      const revealTl = gsap.timeline({ delay: 0.5 });

      counterTl.to(counter, {
        value: 100,
        duration: 5,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(
              counter.value,
            ).toString();
          }
        },
      });

      gsap.set(".img", {
        y: 100,
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(".hero-main-image", {
        opacity: 0,
        scale: 2,
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
        .set(".hero-main-image", { opacity: 1 })
        .to(
          ".hero-header",
          {
            y: "0",
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .set(".hero-preloader", { autoAlpha: 0 });

      revealTl.eventCallback("onComplete", () => {
        unlockScroll();
      });
    }, sectionRef);

    return () => {
      unlockScroll();
      ctx.revert();
    };
  }, [lenis]);

  return (
    <section ref={sectionRef} className="relative w-full h-svh overflow-hidden">
      <div className="fixed inset-0 z-50 hero-preloader pointer-events-none">
        <div
          className="absolute inset-0 bg-black hero-overlay"
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
      </div>
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 hero-main-image">
        <div className="h-44 w-28 overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2025/09/22/14/50/shimabdinzade-girl-9848839_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-[70%] lg:top-[60%] z-20 w-full -translate-x-1/2 translate-y-[130%] uppercase text-center text-[11vw] hero-header">
        <h1>Ashkan Kohandel</h1>
      </div>
    </section>
  );
}
