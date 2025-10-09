// DIAGNOSTIC COMMENT: This comment is added by the AI assistant to verify if file changes are being applied. If you can see this, the system is working.

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import DocumentAnalyzer from '@/components/sections/document-analyzer';
import ConsultationPackages from '@/components/sections/consultation-packages';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import ScrollRevealWrapper from '@/components/animations/scroll-reveal-wrapper';
import Blog from '@/components/sections/blog';
import Faq from '@/components/sections/faq';
import Guarantee from '@/components/sections/guarantee';
import Trust from '@/components/sections/trust';
import WhyChooseUs from '@/components/sections/why-choose-us';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />

        <ScrollRevealWrapper>
          <Services />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <WhyChooseUs />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <Guarantee />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <DocumentAnalyzer />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <ConsultationPackages />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <Trust />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <Testimonials />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <Blog />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <Faq />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <Contact />
        </ScrollRevealWrapper>

      </main>
      <Footer />
    </div>
  );
}
