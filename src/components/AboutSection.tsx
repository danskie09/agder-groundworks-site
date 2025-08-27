import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'Years in Business', value: '10+' },
    { icon: Trophy, label: 'Projects Completed', value: '500+' },
    { icon: Users, label: 'Satisfied Customers', value: '200+' },
    { icon: MapPin, label: 'Service Area', value: 'Agder Region' },
  ];

  return (
    <section id="about" className="section-padding bg-sand">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Founded in 2013, we specialize in excavation, blasting, mass transport, and quarry operations across Agder. Our focus is on quality, safety, and building strong customer relationships.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  With over a decade of experience in the construction and quarry industry, we have built a reputation for reliability, professionalism, and exceptional service quality. Our modern equipment fleet and skilled operators ensure every project is completed to the highest standards.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  From small residential projects to large commercial developments, we approach every job with the same commitment to excellence and attention to detail that has made us a trusted partner throughout the Agder region.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="text-center p-6 shadow-soft border-0 hover:shadow-accent transition-smooth group">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-lg mb-4 group-hover:scale-110 transition-smooth">
                      <stat.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    <div className="font-heading text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;