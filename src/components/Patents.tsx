import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { patents } from "../data/patents";

gsap.registerPlugin(ScrollTrigger);

export function Patents() {
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
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
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
        y: 60,
        rotationX: 15,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.7,
        stagger: 0.12,
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

  const getStatusColor = (status: "pending" | "granted" | "published") => {
    switch (status) {
      case "granted":
        return {
          bg: "bg-green-500/10",
          text: "text-green-600 dark:text-green-400",
          border: "border-green-500/20",
        };
      case "published":
        return {
          bg: "bg-amber-500/10",
          text: "text-amber-600 dark:text-amber-400",
          border: "border-amber-500/20",
        };
      case "pending":
        return {
          bg: "bg-purple-500/10",
          text: "text-purple-600 dark:text-purple-400",
          border: "border-purple-500/20",
        };
    }
  };

  const getStatusLabel = (status: "pending" | "granted" | "published") => {
    switch (status) {
      case "granted":
        return "Granted";
      case "published":
        return "Published";
      case "pending":
        return "Pending";
    }
  };

  return (
    <section ref={containerRef} className="pt-20 pb-10" id="patents">
      <div className="space-y-10">
        <div className="text-center space-y-3">
          <p className="font-story text-[10px] uppercase tracking-[0.45em] text-current/45 dark:text-white/45">
            Section
          </p>
          <h1
            ref={titleRef}
            className="text-4xl font-semibold text-black dark:text-white"
          >
            Patents
          </h1>
        </div>

        <div className="space-y-6 px-4">
          {patents.map((patent, index) => {
            const statusColor = getStatusColor(patent.status);

            return (
              <div
                key={patent.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group overflow-hidden rounded-2xl border border-current/10 dark:border-white/10 bg-linear-to-br from-white/40 to-white/10 dark:from-white/3 dark:to-white/1 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-500 hover:border-current/20 dark:hover:border-white/20 p-8"
              >
                <div className="absolute top-0 left-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent w-0 group-hover:w-full transition-all duration-700" />

                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-semibold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {patent.title}
                      </h3>
                      <p className="text-sm text-current/60 dark:text-white/60">
                        {patent.inventors.join(", ")}
                      </p>
                    </div>

                    <span
                      className={`inline-flex px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border ${statusColor.bg} ${statusColor.text} ${statusColor.border} whitespace-nowrap`}
                    >
                      {getStatusLabel(patent.status)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-current/50 dark:text-white/50 font-mono uppercase tracking-wider">
                        Patent No.
                      </p>
                      <p className="text-sm font-semibold text-current/90 dark:text-white/90">
                        {patent.patentNumber}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-current/50 dark:text-white/50 font-mono uppercase tracking-wider">
                        Filing Date
                      </p>
                      <p className="text-sm font-semibold text-current/90 dark:text-white/90">
                        {new Date(patent.filingDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                          },
                        )}
                      </p>
                    </div>

                    {patent.grantDate && (
                      <div className="space-y-1">
                        <p className="text-xs text-current/50 dark:text-white/50 font-mono uppercase tracking-wider">
                          Grant Date
                        </p>
                        <p className="text-sm font-semibold text-current/90 dark:text-white/90">
                          {new Date(patent.grantDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                            },
                          )}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2 border-t border-current/10 dark:border-white/10">
                    <p className="text-xs text-current/50 dark:text-white/50 font-mono uppercase tracking-wider">
                      Abstract
                    </p>
                    <p className="text-sm leading-relaxed text-current/70 dark:text-white/70">
                      {patent.abstract}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-current/50 dark:text-white/50 font-mono uppercase tracking-wider">
                      Description
                    </p>
                    <p className="text-sm leading-relaxed text-current/65 dark:text-white/65">
                      {patent.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {patent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg bg-current/5 dark:bg-white/5 text-current/70 dark:text-white/70 border border-current/10 dark:border-white/10 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {patent.url && (
                    <div className="flex items-center justify-end pt-2 border-t border-current/10 dark:border-white/10">
                      <a
                        href={patent.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-all flex items-center gap-2"
                      >
                        View Patent →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
