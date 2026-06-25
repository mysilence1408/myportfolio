import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { research } from "../data/research";

gsap.registerPlugin(ScrollTrigger);

export function Research() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="pt-20 pb-10" id="research">
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <p className="font-story text-[10px] uppercase tracking-[0.45em] text-current/45 dark:text-white/45">
            Section
          </p>
          <h1
            ref={titleRef}
            className="text-4xl font-semibold text-black dark:text-white"
          >
            Research & Publications
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {research.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group overflow-hidden rounded-2xl border border-current/10 bg-linear-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/2 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-500 hover:border-current/20 dark:hover:border-white/20 p-6"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-current/60 dark:text-white/60">
                  {item.authors.join(", ")}
                </p>

                <p className="text-sm font-medium text-current/70 dark:text-white/70">
                  {item.publication}
                </p>

                <p className="text-sm leading-relaxed text-current/65 dark:text-white/65 line-clamp-3">
                  {item.abstract}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-current/5 dark:bg-white/5 text-current/70 dark:text-white/70 border border-current/10 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-current/10 dark:border-white/10">
                  <p className="text-xs text-current/50 dark:text-white/50 font-mono">
                    {item.doi}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all"
                    >
                      Read →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
