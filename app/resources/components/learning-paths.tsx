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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-bold">Learning Paths</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {paths.map((path) => (
          <Card key={path} className="border-zinc-800 bg-zinc-950">
            <CardContent className="p-6">
              <h3 className="font-semibold text-white">{path}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
