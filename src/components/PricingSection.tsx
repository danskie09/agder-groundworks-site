import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import aerialImage from '@/assets/aerial-quarry.jpg';

const PricingSection = () => {
  const materials = [
    { material: 'Subbus 0-20mm', size: '0-20mm', price: 'Contact for pricing' },
    { material: 'Singel 8-11mm', size: '8-11mm', price: 'Contact for pricing' },
    { material: 'Crushed Stone', size: '0-32mm', price: 'Contact for pricing' },
    { material: 'Gravel', size: '16-32mm', price: 'Contact for pricing' },
    { material: 'Fill Sand', size: '0-8mm', price: 'Contact for pricing' },
    { material: 'Bark Mulch', size: 'Various', price: 'Contact for pricing' },
    { material: 'Topsoil', size: 'Screened', price: 'Contact for pricing' },
    { material: 'Road Base', size: '0-40mm', price: 'Contact for pricing' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="pricing" 
      className="section-padding bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${aerialImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Materials & Pricing
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            High-quality construction materials delivered to your project site. Contact us for current pricing and availability.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-accent border-0">
          <CardHeader className="text-center">
            <CardTitle className="font-heading text-2xl text-primary">Material Price List</CardTitle>
            <CardDescription className="text-lg">
              All prices are per ton and subject to change. Delivery charges may apply.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="font-heading font-semibold text-primary">Material</TableHead>
                    <TableHead className="font-heading font-semibold text-primary">Size</TableHead>
                    <TableHead className="font-heading font-semibold text-primary text-right">Price per Ton</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {materials.map((item, index) => (
                    <TableRow key={index} className="hover:bg-sand transition-smooth border-border">
                      <TableCell className="font-medium">{item.material}</TableCell>
                      <TableCell className="text-muted-foreground">{item.size}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Need a custom quote or have questions about bulk pricing? We're here to help!
              </p>
              <Button 
                variant="accent" 
                size="lg"
                onClick={scrollToContact}
              >
                Request Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;