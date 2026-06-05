import { Card, CardContent } from "@/components/ui/card";

const paths = [
  "Programming Fundamentals",
  "Web Development",
  "Machine Learning",
  "Competitive Programming",
  "Cybersecurity",
  "Robotics",
  "Mobile Development",
  "Software Engineering",
];

export function LearningPaths() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Learning Paths</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path) => (
          <Card key={path} className="border-zinc-800 bg-zinc-950">
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold text-white">{path}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
