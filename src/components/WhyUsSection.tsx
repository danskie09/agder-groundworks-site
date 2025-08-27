import { Shield, Users, Award, DollarSign, Clock, CheckCircle } from 'lucide-react';

const WhyUsSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled operators with years of industry expertise and proven track records.'
    },
    {
      icon: Shield,
      title: 'Safety-Focused Operations',
      description: 'Rigorous safety protocols and certified equipment for every project.'
    },
    {
      icon: Award,
      title: 'Customer-First Service',
      description: 'Dedicated to delivering exceptional service and exceeding expectations.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with detailed quotes and no hidden costs.'
    },
    {
      icon: Clock,
      title: 'Reliable Transport',
      description: 'On-time delivery with modern equipment and efficient logistics.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Commitment to excellence in every aspect of our services.'
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience, we bring professionalism, reliability, and excellence to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group text-center p-6 rounded-xl hover:bg-sand transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-xl mb-6 group-hover:shadow-accent transition-smooth group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;