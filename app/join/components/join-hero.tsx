export function JoinHero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_40%)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          Join AKCS
        </div>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Start Building.
          <span className="block text-purple-400">Start Learning.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-zinc-400">
          Join a community of students interested in software development,
          cybersecurity, machine learning, competitive programming, and
          technology.
        </p>
      </div>
    </section>
  );
}
