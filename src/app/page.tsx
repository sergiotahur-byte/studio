import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import DocumentAnalyzer from '@/components/sections/document-analyzer';
import ConsultationPackages from '@/components/sections/consultation-packages';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import ScrollRevealWrapper from '@/components/animations/scroll-reveal-wrapper';

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
          <DocumentAnalyzer />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <ConsultationPackages />
        </ScrollRevealWrapper>

        <ScrollRevealWrapper>
          <Testimonials />
        </ScrollRevealWrapper>
        
        <ScrollRevealWrapper>
          <Contact />
        </ScrollRevealWrapper>

      </main>
      <Footer />
    </div>
  );
}
