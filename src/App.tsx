import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { LearningModelSection } from './components/LearningModelSection';
import { LabsSection } from './components/LabsSection';
import { LearningPathSection } from './components/LearningPathSection';
import { CourseTimeline } from './components/CourseTimeline';
import { ShowcaseSection } from './components/ShowcaseSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhyParentsSection } from './components/WhyParentsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

/**
 * AI Labs — static marketing prototype.
 * Sections render top-to-bottom in the order presented to parents and partners.
 * All content is static mock data from src/data/content.ts (no backend).
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <LearningModelSection />
        <LabsSection />
        <LearningPathSection />
        <CourseTimeline />
        <ShowcaseSection />
        <CaseStudiesSection />
        <WhyParentsSection />
        <ComparisonTable />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
