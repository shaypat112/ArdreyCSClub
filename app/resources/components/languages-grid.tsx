import { Card, CardContent } from "@/components/ui/card";

const languages = [
  {
    name: "Python",
    link: "https://www.learnpython.org",
  },
  {
    name: "Java",
    link: "https://www.w3schools.com/java",
  },
  {
    name: "JavaScript",
    link: "https://javascript.info",
  },
  {
    name: "C++",
    link: "https://www.learncpp.com",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/docs",
  },
  {
    name: "Go",
    link: "https://go.dev/learn",
  },
];

export function LanguagesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-bold">Programming Languages</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {languages.map((lang) => (
          <a key={lang.name} href={lang.link} target="_blank" rel="noreferrer">
            <Card className="border-zinc-800 bg-zinc-950 transition hover:border-purple-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {lang.name}
                </h3>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
