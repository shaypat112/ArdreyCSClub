import { Card, CardContent } from "@/components/ui/card";

export function Welcome() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <Card className="border-zinc-800 bg-zinc-950">
        <CardContent className="p-6 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to the Developer Page
          </h1>
          <p className="text-zinc-400">
            Explore resources, projects, and opportunities to enhance your
            development skills.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
