import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drill, Shovel, Truck, Mountain } from 'lucide-react';
import excavationImage from '@/assets/excavation.jpg';
import tunnelImage from '@/assets/tunnel-blasting.jpg';
import aerialImage from '@/assets/aerial-quarry.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: 'Rock Blasting',
      description: 'From drilling to large-scale production jobs.',
      icon: Drill,
      image: tunnelImage,
      details: 'Professional controlled blasting operations for construction and quarry projects.'
    },
    {
      title: 'Excavation',
      description: 'Groundwork, leveling, drainage, and trenching.',
      icon: Shovel,
      image: excavationImage,
      details: 'Complete earthmoving services for residential, commercial, and industrial projects.'
    },
    {
      title: 'Mass Transport',
      description: 'Fast delivery of gravel, bark, stone, and other fill materials.',
      icon: Truck,
      image: aerialImage,
      details: 'Reliable transportation of construction materials with our modern fleet.'
    },
    {
      title: 'Quarry',
      description: 'Gravel and crushed stone production, including custom crushing.',
      icon: Mountain,
      image: aerialImage,
      details: 'High-quality aggregates and stone products for construction projects.'
    },
  ];

  return (
    <section id="services" className="section-padding bg-sand">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive machinery services for construction, infrastructure, and industrial projects across Agder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-accent transition-smooth cursor-pointer overflow-hidden border-0 shadow-soft"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth"></div>
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-soft">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary group-hover:text-accent transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;