import { LanguageProvider } from './i18n';
import { useAnalytics } from './analytics';
import { LeadModalProvider } from './components/LeadModal';
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
import { TestimonialsSection } from './components/TestimonialsSection';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

/**
 * AI Labs — static marketing prototype.
 * Sections render top-to-bottom in the order presented to parents and partners.
 * All content is bilingual mock data from src/data/dictionary.ts (no backend),
 * driven by the LanguageProvider (English / 中文).
 */
export default function App() {
  useAnalytics(); // loads GA only when a measurement ID is configured

  return (
    <LanguageProvider>
      <LeadModalProvider>
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
            <TestimonialsSection />
            <ComparisonTable />
            <PricingSection />
            <FaqSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </LeadModalProvider>
    </LanguageProvider>
  );
}
