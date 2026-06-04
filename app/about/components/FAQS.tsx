import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="container py-20">
      <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>Do I need coding experience?</AccordionTrigger>

          <AccordionContent>No. Beginners are welcome.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>Can I join competitions?</AccordionTrigger>

          <AccordionContent>
            Yes. Members can participate in hackathons and programming
            competitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
