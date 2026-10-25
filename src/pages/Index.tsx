import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Statistics } from '@/sections/Statistics';
import { AboutLaw } from '@/sections/AboutLaw';
import { Pillars } from '@/sections/Pillars';
import { ComplianceSteps } from '@/sections/ComplianceSteps';
import { BlogPreview } from '@/sections/BlogPreview';
import { Benefits } from '@/sections/Benefits';
import { FAQ } from '@/sections/FAQ';
import { CTASection } from '@/sections/CTASection';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { AdSlot } from '@/components/AdSlot';
import { adSlots } from '@/lib/adsense';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <AboutLaw />
        <Pillars />
        <AdSlot slot={adSlots.home} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
        <ComplianceSteps />
        <BlogPreview />
        <Benefits />
        <FAQ />
        <AdSlot slot={adSlots.home} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
