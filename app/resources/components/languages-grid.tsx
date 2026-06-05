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
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
        Programming Languages
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {languages.map((lang) => (
          <a
            key={lang.name}
            href={lang.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Card className="border-zinc-800 bg-zinc-950 transition hover:border-purple-500">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
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
