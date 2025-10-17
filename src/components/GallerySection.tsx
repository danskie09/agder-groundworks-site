import img1 from '@/assets/gallery/1.webp';
import img2 from '@/assets/gallery/2.webp';
import img3 from '@/assets/gallery/3.webp';
import img4 from '@/assets/gallery/4.webp';
import img5 from '@/assets/gallery/5.webp';
import img6 from '@/assets/gallery/6.webp';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const GallerySection = () => {
  const images = [
    { src: img1, alt: 'Project photo 1' },
    { src: img2, alt: 'Project photo 2' },
    { src: img3, alt: 'Project photo 3' },
    { src: img4, alt: 'Project photo 4' },
    { src: img5, alt: 'Project photo 5' },
    { src: img6, alt: 'Project photo 6' },
  ] as const;
  const uniformRatio = 16 / 9;

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            recent earthworks, blasting, transport and quarry operations across Agder.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="basis-10/12 sm:basis-7/12 md:basis-5/12 lg:basis-4/12">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-soft transition-smooth hover:shadow-accent">
                        <AspectRatio ratio={uniformRatio}>
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </AspectRatio>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/40 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                          {img.alt}
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <img src={img.src} alt={img.alt} className="w-full h-auto" />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 bg-white/70 hover:bg-white" />
            <CarouselNext className="-right-6 bg-white/70 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


