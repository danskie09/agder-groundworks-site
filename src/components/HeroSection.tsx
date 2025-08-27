import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-quarry.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Machinery Contractor
          <span className="block text-accent">in Agder</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in">
          Professional services in excavation, blasting, transport, and quarry operations.
        </p>
        
        <Button 
          variant="hero"
          onClick={scrollToContact}
          className="animate-fade-in"
        >
          Get a Quote
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;