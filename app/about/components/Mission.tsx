import { Card, CardContent } from "@/components/ui/card";

export function Mission() {
  return (
    <section className="container py-20">
      <Card>
        <CardContent className="p-8">
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>

          <p className="text-muted-foreground">
            We provide students with opportunities to learn computer science,
            develop technical skills, participate in competitions, and
            collaborate on meaningful projects.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
