import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-8 text-center text-4xl font-bold">FAQ</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Do I need coding experience?</AccordionTrigger>
          <AccordionContent>
            No. Students of all experience levels are welcome.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>
            What programming languages do you teach?
          </AccordionTrigger>
          <AccordionContent>
            Members are exposed to languages such as Java, Python, JavaScript,
            and C++ depending on projects and activities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3">
          <AccordionTrigger>Can beginners join hackathons?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We help members prepare and form teams.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
