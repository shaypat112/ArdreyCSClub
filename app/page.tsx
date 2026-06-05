import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_40%)]" />

        <div className="max-w-4xl">
          <div className="mb-4 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Ardrey Kell High School
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Ardrey Kell
            <span className="block text-purple-400">Computer Science Club</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Learn programming, build projects, participate in hackathons,
            compete in coding competitions, and connect with students who share
            a passion for technology.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/hackathons"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-purple-500"
            >
              View Hackathons
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
