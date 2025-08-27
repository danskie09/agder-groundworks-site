import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Facebook, Building } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'post@skogoganleggsdrift.no',
      href: 'mailto:post@skogoganleggsdrift.no'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+47 930 44 930',
      href: 'tel:+4793044930'
    },
    {
      icon: Phone,
      label: 'Alternative Phone',
      value: '+47 970 86 857',
      href: 'tel:+4797086857'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Lundegrend, Agder, Norway',
      href: 'https://maps.google.com/?q=Lundegrend,Agder,Norway'
    },
    {
      icon: Building,
      label: 'Organization Number',
      value: '912 306 579',
      href: null
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Get in touch with us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary">Send us a Message</CardTitle>
              <CardDescription className="text-lg">
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-heading font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 border-2 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="font-heading font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 border-2 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-heading font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2 border-2 focus:border-primary resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">Contact Information</CardTitle>
                <CardDescription className="text-lg">
                  Get in touch with us directly using any of the methods below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-sand transition-smooth">
                    <div className="bg-gradient-accent p-2 rounded-lg shadow-soft">
                      <info.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading font-medium text-primary">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-smooth"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://www.facebook.com/profile.php?id=100054403634516" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 p-3 rounded-lg hover:bg-sand transition-smooth group"
                >
                  <div className="bg-gradient-accent p-2 rounded-lg shadow-soft group-hover:shadow-accent transition-smooth">
                    <Facebook className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="font-heading font-medium text-primary group-hover:text-accent transition-smooth">
                    Facebook Page
                  </span>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;