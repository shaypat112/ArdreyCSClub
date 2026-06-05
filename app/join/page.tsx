import SignupFormDemo from "./components/join-form";
import { JoinHero } from "./components/join-hero";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <JoinHero />
      <br />

      <SignupFormDemo />
    </main>
  );
}
