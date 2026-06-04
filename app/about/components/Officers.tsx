import { Card, CardContent } from "@/components/ui/card";

const officers = [
  {
    name: "President",
    role: "Club Leadership",
  },
  {
    name: "Vice President",
    role: "Operations & Projects",
  },
  {
    name: "Secretary",
    role: "Communications",
  },
  {
    name: "Treasurer",
    role: "Budget & Logistics",
  },
];

export function Officers() {
  return (
    <section className="container py-20">
      <h2 className="mb-8 text-3xl font-bold">Leadership Team</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {officers.map((officer) => (
          <Card key={officer.name}>
            <CardContent className="p-6">
              <h3 className="font-semibold">{officer.name}</h3>

              <p className="text-sm text-muted-foreground">{officer.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
