import { Button } from '@/components/ui/button';
import { useHero } from '@/hooks/useSanity';

const HeroSection = () => {
  const { data: heroData } = useHero();
  const handleScroll = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.getElementById(link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Gradient Overlays for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-white container-custom">
        <div className="max-w-3xl py-24 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur-md mb-5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="tracking-wide">{heroData.tagline}</span>
          </div>

          <h1 className="font-heading font-bold leading-tight text-4xl md:text-6xl mb-4">
            {heroData.title}
          </h1>

          <p className="font-heading text-2xl md:text-3xl font-semibold tracking-wide text-accent mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            {heroData.subtitle}
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" onClick={() => handleScroll(heroData.ctaLink)}>{heroData.ctaText}</Button>
            <Button variant="outline" onClick={() => handleScroll(heroData.secondaryCtaLink)} className="backdrop-blur-md border-white/60 text-white hover:bg-accent hover:text-accent-foreground">
              {heroData.secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;