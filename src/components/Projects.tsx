import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import { projects } from "../data/projects";

export function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxScrollRef = useRef(0);
  const inertialTweenRef = useRef<gsap.core.Tween | null>(null);

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

  return (
    <div className="pt-10">
      <div className="space-y-10">
        <h1 className="text-4xl text-center">Projects</h1>

        <div className="space-y-4">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden select-none"
            style={{ scrollbarGutter: "stable" }}
          >
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group shrink-0 overflow-hidden project-card"
                aria-label={`Open ${project.title} project`}
              >
                <div className="relative overflow-hidden rounded-xl border border-current/10 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:bg-white/5">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    draggable={false}
                    className="h-150 w-105 object-cover transition duration-700 group-hover:scale-[1.03] pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-story text-[10px] uppercase tracking-[0.35em] text-white/65">
                      {project.category}
                    </p>
                    <div className="mt-2 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-medium">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/70">{project.year}</p>
                      </div>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-end gap-3 px-2">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scrollCarousel("left")}
              className="rounded-md bg-white/90 px-3 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer dark:bg-black/85 dark:text-white"
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
        </div>
      </div>
    </div>
  );
}
