import { Card, CardContent } from "@/components/ui/card";

const resources = [
  {
    title: "Khan Academy",
    description: "Programming fundamentals and computing.",
    link: "https://www.khanacademy.org",
  },
  {
    title: "freeCodeCamp",
    description: "Full web development curriculum.",
    link: "https://www.freecodecamp.org",
  },
  {
    title: "roadmap.sh",
    description: "Career and technology roadmaps.",
    link: "https://roadmap.sh",
  },
  {
    title: "MIT OpenCourseWare",
    description: "University-level CS courses.",
    link: "https://ocw.mit.edu",
  },
];

export function FeaturedResources() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-bold">Featured Resources</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.link}
            target="_blank"
            rel="noreferrer"
          >
            <Card className="border-zinc-800 bg-zinc-950 transition hover:border-purple-500">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {resource.title}
                </h3>

                <p className="text-zinc-400">{resource.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
