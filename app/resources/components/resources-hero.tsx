export function ResourcesHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 text-center">
        <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          AKCS Learning Hub
        </div>

        <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-6xl">
          Learn.
          <span className="block text-purple-400">Build. Explore.</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-zinc-400">
          Curated resources for programming, software engineering, artificial
          intelligence, robotics, cybersecurity, web development, and more.
        </p>
      </div>
    </section>
  );
}
