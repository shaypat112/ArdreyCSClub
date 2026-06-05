import { CSConcepts } from "./components/cs-concepts";
import { FeaturedResources } from "./components/featured-resources";
import { LanguagesGrid } from "./components/languages-grid";
import { LearningPaths } from "./components/learning-paths";
import { ResourcesHero } from "./components/resources-hero";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ResourcesHero />
      <LearningPaths />
      <LanguagesGrid />
      <CSConcepts />
      <FeaturedResources />
    </main>
  );
}
