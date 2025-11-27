import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import GallerySection from '@/components/GallerySection';
import MapSection from '@/components/MapSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div data-aos="fade-up">
          <HeroSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <ServicesSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <WhyUsSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <GallerySection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <PricingSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <AboutSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <MapSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <ContactSection />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <BlogSection />
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
