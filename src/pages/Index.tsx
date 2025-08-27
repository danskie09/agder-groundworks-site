import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import GallerySection from '@/components/GallerySection';
import MapSection from '@/components/MapSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="reveal">
          <HeroSection />
        </div>
        <div className="reveal reveal-delay-100">
          <ServicesSection />
        </div>
        <div className="reveal reveal-delay-200">
          <WhyUsSection />
        </div>
        <div className="reveal reveal-delay-300">
          <GallerySection />
        </div>
        <div className="reveal">
          <PricingSection />
        </div>
        <div className="reveal">
          <AboutSection />
        </div>
        <div className="reveal">
          <MapSection />
        </div>
        <div className="reveal">
          <ContactSection />
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
