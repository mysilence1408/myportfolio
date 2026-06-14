import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

export function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const maxScrollRef = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const velocityX = useRef(0);
  const inertialTweenRef = useRef<gsap.core.Tween | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    inertialTweenRef.current?.kill();

    const distance = Math.max(carousel.clientWidth * 0.8, 280);
    const nextScrollLeft =
      carousel.scrollLeft + (direction === "left" ? -distance : distance);

    carousel.scrollTo({
      left: gsap.utils.clamp(0, maxScrollRef.current, nextScrollLeft),
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateBounds = () => {
      maxScrollRef.current = Math.max(
        carousel.scrollWidth - carousel.clientWidth,
        0,
      );
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  const images = [
    {
      id: 1,
      src: "/images/findora.png",
    },
    {
      id: 2,
      src: "/images/vida.png",
    },
    {
      id: 3,
      src: "/images/portfolio.png",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
    },
  ];

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setIsDragging(true);
    gsap.killTweensOf(carousel);
    inertialTweenRef.current?.kill();
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = carousel.scrollLeft;
    lastPointerX.current = event.clientX;
    lastPointerTime.current = performance.now();
    velocityX.current = 0;
    maxScrollRef.current = Math.max(
      carousel.scrollWidth - carousel.clientWidth,
      0,
    );

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const bounds = carousel.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });

    if (!isDragging) return;

    const now = performance.now();
    const deltaTime = Math.max(now - lastPointerTime.current, 1);
    velocityX.current = (event.clientX - lastPointerX.current) / deltaTime;
    lastPointerX.current = event.clientX;
    lastPointerTime.current = now;

    const deltaX = event.clientX - dragStartX.current;
    const intended = dragStartScrollLeft.current - deltaX;
    const maxScroll = maxScrollRef.current;

    carousel.scrollLeft = gsap.utils.clamp(0, maxScroll, intended);
  };

  const stopDragging = () => {
    const carousel = carouselRef.current;

    if (carousel) {
      const maxScroll = maxScrollRef.current;
      const momentumDistance = -velocityX.current * 320;
      const intended = gsap.utils.clamp(
        0,
        maxScroll,
        carousel.scrollLeft + momentumDistance,
      );

      const proxy = { value: carousel.scrollLeft };
      inertialTweenRef.current?.kill();
      inertialTweenRef.current = gsap.to(proxy, {
        value: intended,
        duration: 0.85,
        ease: "power3.out",
        onUpdate: () => {
          carousel.scrollLeft = proxy.value;
        },
        onComplete: () => {
          inertialTweenRef.current = null;
        },
      });
    }

    setIsDragging(false);
  };

  return (
    <div className=" pt-10">
      <div className=" space-y-10">
        <h1 className="text-4xl text-center">Projects</h1>
        <div className="relative space-y-4">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden select-none cursor-grab active:cursor-grabbing"
            style={{ scrollbarGutter: "stable" }}
            onPointerEnter={() => setIsHovering(true)}
            onPointerLeave={() => {
              setIsHovering(false);
              stopDragging();
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          >
            {images.map((image) => {
              return (
                <div
                  key={image.id}
                  className=" overflow-hidden shrink-0 project-card"
                >
                  <img
                    src={image.src}
                    alt="image"
                    draggable={false}
                    className="object-cover w-105 h-150 pointer-events-none"
                  ></img>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-3 px-2">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scrollCarousel("left")}
              className=" rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer dark:bg-black/85 dark:text-white"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => scrollCarousel("right")}
              className="rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer dark:bg-black/85 dark:text-white"
            >
              Next
            </button>
          </div>

          {isHovering && (
            <div
              className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-black dark:bg-black dark:text-white px-4 py-2 text-sm tracking-wide"
              style={{ left: cursorPosition.x, top: cursorPosition.y }}
            >
              Drag
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
