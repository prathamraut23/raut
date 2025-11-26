import Image from 'next/image';
import { Metadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Raut Orange Ecosystem',
  description: 'Explore the comprehensive services offered by Raut Farmer Producer Company, from sustainable orange farming and advanced sorting to complete ecosystem support for our farmers.',
};

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const services = [
  {
    title: 'AGRO PRODUCTS',
    description: 'like fertilizers and pesticides',
    image: getImage('service-detail-farming')
  },
  {
    title: 'COLD STORAGE',
    description: 'for fruits and vegetables',
    image: getImage('service-detail-sorting')
  },
  {
    title: 'FRUITS PROCESSING UNIT',
    description: '',
    image: getImage('service-detail-support')
  },
];

export default function ServicesPage() {
  return (
    <div>
       <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-bold text-primary">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-foreground/80">
                Providing end-to-end solutions to build a resilient and prosperous agricultural community.
            </p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="flex flex-col overflow-hidden group">
              <div className="relative h-48 w-full">
                 {service.image && (
                   <Image
                     src={service.image.imageUrl}
                     alt={service.image.description}
                     fill
                     className="object-cover transition-transform duration-300 group-hover:scale-105"
                     sizes="(max-width: 768px) 100vw, 33vw"
                     data-ai-hint={service.image.imageHint}
                   />
                 )}
               </div>
             <CardHeader>
               <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
             </CardHeader>
             <CardContent className="font-body text-foreground/70 flex-grow">
               {service.description}
             </CardContent>
           </Card>
            ))}
        </div>
        
        {/* CTA */}
        <section className="text-center mt-24 bg-primary/10 py-16 rounded-lg">
            <h2 className="text-3xl font-bold text-primary">Ready to Grow With Us?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg font-body text-foreground/80">
                Connect with our team to learn more about how our services can benefit you.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Contact Our Team</Link>
            </Button>
        </section>

      </main>
    </div>
  )
}
