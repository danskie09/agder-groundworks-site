import img1 from '@/assets/gallery/1.webp';
import img2 from '@/assets/gallery/2.webp';
import img3 from '@/assets/gallery/3.webp';
import img4 from '@/assets/gallery/4.webp';
import img5 from '@/assets/gallery/5.webp';
import img6 from '@/assets/gallery/6.webp';

const GallerySection = () => {
  const images = [
    { src: img1, alt: 'Project photo 1' },
    { src: img2, alt: 'Project photo 2' },
    { src: img3, alt: 'Project photo 3' },
    { src: img4, alt: 'Project photo 4' },
    { src: img5, alt: 'Project photo 5' },
    { src: img6, alt: 'Project photo 6' },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse of our recent earthworks, blasting, transport and quarry operations across Agder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-soft">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


