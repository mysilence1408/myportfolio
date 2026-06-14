export function Contact() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28 mt-10">
      <div className="absolute inset-0 -z-20 bg-primary dark:bg-primary-dark" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.08),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.04),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.04),_transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-15 mix-blend-multiply dark:opacity-25 dark:mix-blend-soft-light">
        <img
          src="https://images.pexels.com/photos/5541019/pexels-photo-5541019.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-between rounded-[2rem] border border-black/10 bg-white/60 p-8 text-primary-dark shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-black/20 dark:text-primary lg:p-12">
          <div className="space-y-6">
            <p className="font-story text-xs uppercase tracking-[0.45em] text-primary-dark/55 dark:text-primary/55">
              Contact
            </p>
            <h2 className="max-w-xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s shape something thoughtful, useful, and visually sharp.
            </h2>
            <p className="max-w-lg text-sm leading-7 text-primary-dark/70 dark:text-primary/70 sm:text-base">
              If you are building a portfolio, launching a product, or refining
              an existing experience, send a message and I will respond with a
              clear next step.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <span className="block text-xs uppercase tracking-[0.25em] text-primary-dark/45 dark:text-primary/45">
                Reply
              </span>
              <span className="mt-2 block text-lg text-primary-dark dark:text-primary">
                Within 24 hours
              </span>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <span className="block text-xs uppercase tracking-[0.25em] text-primary-dark/45 dark:text-primary/45">
                Availability
              </span>
              <span className="mt-2 block text-lg text-primary-dark dark:text-primary">
                Open for projects
              </span>
            </div>
          </div>
        </div>

        <form
          action=""
          className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-black/25 lg:p-10"
        >
          <div className="mb-8 space-y-3">
            <p className="font-story text-xs uppercase tracking-[0.35em] text-primary-dark/55 dark:text-primary/55">
              Start a conversation
            </p>
            <h3 className="text-3xl font-medium text-primary-dark dark:text-primary sm:text-4xl">
              Tell me about your project.
            </h3>
            <p className="max-w-md text-sm leading-7 text-primary-dark/65 dark:text-primary/65">
              A short note is enough. I will take it from there and reply with a
              clear next step.
            </p>
          </div>

          <div className="grid gap-5">
            <label className="grid gap-2 text-sm text-primary-dark/80 dark:text-primary/80">
              Your name
              <input
                type="text"
                placeholder="John Doe"
                className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-primary-dark outline-none transition placeholder:text-primary-dark/35 focus:border-black/25 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-primary dark:placeholder:text-primary/35 dark:focus:border-white/25 dark:focus:bg-white/8"
              />
            </label>

            <label className="grid gap-2 text-sm text-primary-dark/80 dark:text-primary/80">
              Email address
              <input
                type="email"
                placeholder="john@example.com"
                className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-primary-dark outline-none transition placeholder:text-primary-dark/35 focus:border-black/25 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-primary dark:placeholder:text-primary/35 dark:focus:border-white/25 dark:focus:bg-white/8"
              />
            </label>

            <label className="grid gap-2 text-sm text-primary-dark/80 dark:text-primary/80">
              Your message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me what you want to build, improve, or launch."
                className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-primary-dark outline-none transition placeholder:text-primary-dark/35 focus:border-black/25 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-primary dark:placeholder:text-primary/35 dark:focus:border-white/25 dark:focus:bg-white/8"
              />
            </label>

            <button className="mt-2 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full border border-black/10 bg-primary-dark px-6 py-3 text-sm font-medium text-primary transition hover:translate-y-[-1px] hover:opacity-95 dark:border-white/10 dark:bg-primary dark:text-primary-dark">
              Send message
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
