import { Code2, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  const items = [
    {
      icon: Code2,
      title: "Learn",
      description:
        "Develop programming skills through workshops, projects, and hands-on experiences.",
    },
    {
      icon: Trophy,
      title: "Compete",
      description:
        "Participate in hackathons, coding competitions, and technical challenges.",
    },
    {
      icon: Users,
      title: "Collaborate",
      description:
        "Work with fellow students on impactful projects and initiatives.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Our Mission</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="border-zinc-800 bg-zinc-950">
            <CardContent className="p-6">
              <item.icon className="mb-4 h-10 w-10 text-purple-400" />

              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

              <p className="text-zinc-400">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
