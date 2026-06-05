import { Card, CardContent } from "@/components/ui/card";

const concepts = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Web Development",
  "Software Engineering",
  "Robotics",
  "Cybersecurity",
  "Cloud Computing",
  "Data Science",
  "Algorithms",
  "Data Structures",
  "Object-Oriented Programming",
  "Databases",
  "Operating Systems",
  "Computer Networks",
  "Game Development",
  "Mobile Development",
];

export function CSConcepts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-bold">Explore Computer Science</h2>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {concepts.map((concept) => (
          <Card
            key={concept}
            className="border-zinc-800 bg-zinc-950 hover:border-purple-500"
          >
            <CardContent className="flex h-32 items-center justify-center p-6">
              <h3 className="text-center font-semibold text-white">
                {concept}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
