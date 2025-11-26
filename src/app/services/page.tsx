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
    title: 'Sustainable Orange Farming',
    description: 'We guide our farmers in adopting modern, sustainable agricultural practices that enhance crop yield, improve soil health, and minimize environmental impact. Our focus is on growing delicious, healthy oranges for generations to come.',
    image: getImage('service-detail-farming'),
    features: [
      'Integrated Pest Management (IPM)',
      'Organic fertilization and soil enrichment',
      'Water conservation techniques',
      'Crop rotation and biodiversity promotion',
    ],
  },
  {
    title: 'Advanced Sorting & Grading',
    description: 'Our central processing facility is equipped with cutting-edge technology to sort and grade oranges based on size, color, weight, and quality. This ensures uniformity and premium value for every batch that leaves our facility.',
    image: getImage('service-detail-sorting'),
    features: [
      'Automated optical sorting technology',
      'Hygienic handling and processing',
      'Customized packaging solutions',
      'Strict quality control at every stage',
    ],
  },
  {
    title: 'Complete Ecosystem Support',
    description: 'We believe in holistic support. Our services extend beyond the farm to include financial guidance, market linkage, and continuous training. We empower our farmers to become successful agri-preneurs.',
    image: getImage('service-detail-support'),
    features: [
      'Access to low-cost, high-quality inputs',
      'Financial literacy and loan assistance',
      'Direct market access, eliminating middlemen',
      'Regular training on new technologies and market trends',
    ],
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
        <div className="space-y-20">
            {services.map((service, index) => (
                <section key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                        <p className="font-body text-lg text-foreground/80">{service.description}</p>
                        <ul className="space-y-3 pt-2">
                            {service.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="font-body text-foreground/70">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-96 w-full rounded-lg shadow-xl overflow-hidden">
                        {service.image && (
                            <Image
                                src={service.image.imageUrl}
                                alt={service.image.description}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                data-ai-hint={service.image.imageHint}
                            />
                        )}
                    </div>
                </section>
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
