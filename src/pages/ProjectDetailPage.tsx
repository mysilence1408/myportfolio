import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link, Navigate, useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { getProjectBySlug } from "../data/projects";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const pageRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!project || !pageRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".project-reveal", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".project-gallery-card", {
        opacity: 0,
        y: 48,
        scale: 0.97,
        duration: 1,
        stagger: 0.1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".project-orb", {
        opacity: 0,
        scale: 0.8,
        duration: 1.4,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-primary text-primary-dark dark:bg-primary-dark dark:text-primary">
      <Navbar />
      <main
        ref={pageRef}
        className="relative isolate overflow-hidden pt-28 lg:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.08),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.05),_transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_26%)]" />
        <div className="project-orb pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-black/5 blur-3xl dark:bg-white/10" />
        <section className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="project-reveal flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
            <span className="font-story">Case study</span>
            <span className="h-px w-14 bg-current/15" />
            <span>{project.category}</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <h1 className="project-reveal max-w-3xl text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="project-reveal max-w-xl text-sm leading-7 text-primary-dark/70 dark:text-primary/70 sm:text-base">
                {project.summary}
              </p>

              <div className="project-reveal flex flex-wrap gap-3">
                {[project.role, project.year].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-current/10 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary-dark/70 dark:bg-white/5 dark:text-primary/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-reveal flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-dark bg-primary-dark px-5 py-3 text-sm text-primary transition hover:translate-y-[-1px] hover:opacity-95 dark:border-primary dark:bg-primary dark:text-primary-dark"
                >
                  Visit live site
                  <span aria-hidden="true">↗</span>
                </a>
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/60 px-5 py-3 text-sm transition hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"
                >
                  Back to projects
                </Link>
              </div>
            </div>

            <div className="project-reveal rounded-[2rem] border border-current/10 bg-white/70 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:bg-white/5">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={project.gallery[0].src}
                  alt={project.gallery[0].alt}
                  className="h-[28rem] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="project-reveal space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[2rem] border border-current/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/5">
                <p className="font-story text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
                  Overview
                </p>
                <p className="mt-4 text-sm leading-7 text-primary-dark/70 dark:text-primary/70">
                  {project.overview}
                </p>
              </div>

              <div className="rounded-[2rem] border border-current/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/5">
                <p className="font-story text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
                  What I did
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-dark/75 dark:text-primary/75">
                  {project.whatIDid.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-current/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/5">
                <p className="font-story text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
                  Deliverables
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-current/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-primary-dark/70 dark:text-primary/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-5">
              <div className="project-reveal rounded-[2rem] border border-current/10 bg-white/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/5 lg:p-8">
                <p className="font-story text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
                  Case notes
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-dark/75 dark:text-primary/75 sm:text-base">
                  The goal was to create an experience that feels premium from
                  the first second: large imagery, clean spacing, restrained
                  motion, and a layout that lets the work itself lead the story.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <figure
                    key={image.src}
                    className={`project-gallery-card overflow-hidden rounded-[1.75rem] border border-current/10 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:bg-white/5 ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover ${index === 0 ? "h-[26rem]" : "h-72"}`}
                    />
                  </figure>
                ))}
              </div>

              <div className="project-reveal rounded-[2rem] border border-current/10 bg-primary-dark px-6 py-8 text-primary shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:bg-primary dark:text-primary-dark lg:px-8">
                <p className="font-story text-xs uppercase tracking-[0.35em] opacity-60">
                  Live link
                </p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-2xl text-sm leading-7 opacity-80 sm:text-base">
                    Open the deployed version of this project to experience the
                    full interaction and visual flow in the browser.
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-current/15 bg-transparent px-5 py-3 text-sm transition hover:bg-primary hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary"
                  >
                    Open project
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
