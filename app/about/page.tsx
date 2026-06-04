import { FAQ } from "./components/FAQS";
import { Hero } from "./components/Hero";
import { Meetings } from "./components/Meetings";
import { Mission } from "./components/Mission";
import { Officers } from "./components/Officers";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Mission />
      <Officers />
      <Meetings />

      <FAQ />
    </main>
  );
}
