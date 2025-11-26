import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Raut Orange Ecosystem',
  description: 'Learn about the history, mission, vision, and the dedicated team behind Raut Farmer Producer Company.',
};

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const aboutHeroImage = getImage('about-hero');
const teamMembers = [
  { name: 'Mr. Avinash Raut', title: 'Founder & CEO', image: getImage('team-member-1') },
  { name: 'Mrs. Sunita Deshmukh', title: 'Head of Operations', image: getImage('team-member-2') },
  { name: 'Mr. Rohan Patil', title: 'Lead Agronomist', image: getImage('team-member-3') },
];

const objectives = [
  "To improve the income of member farmers by creating market linkages.",
  "To provide quality inputs and services to member farmers at reasonable prices.",
  "To promote sustainable agricultural practices and protect the environment.",
  "To facilitate access to modern technology and scientific farming methods.",
  "To build a strong, self-reliant farming community."
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-secondary">
        {aboutHeroImage && (
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={aboutHeroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">About Us</h1>
          <p className="mt-2 max-w-3xl text-lg font-body">Step into a citrus paradise with RAUT FARMER PRODUCER COMPANY, where the tantalizing world of premium oranges awaits your senses.</p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="font-body text-lg text-foreground/80">
                Immerse yourself in the succulence that defines our oranges - each one bursting with flavor and juiciness that embodies our unwavering commitment to quality. Our oranges don't just bring a burst of citrus; they radiate vibrancy, painted in the hues of sun-kissed excellence. But our commitment goes beyond the orchards; it's a journey of social responsibility. With every bite, you're supporting a community dedicated to sustainable practices and ethical farming. Join us in exploring not just the taste of excellence but the zest of a brighter, greener tomorrow!
              </p>
              <div className="flex gap-2">
                <span className="font-bold text-primary">#CitrusParadise</span>
                <span className="font-bold text-primary">#OrangeExcellence</span>
                <span className="font-bold text-primary">#SustainableZest</span>
              </div>
            </div>
            <div className="space-y-6">
                <Card className="bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Our Core Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>At RAUT FARMER PRODUCER COMPANY, our core values are the guiding principles that define our essence. Rooted in a commitment to excellence, unity, and innovation, we relentlessly pursue quality in every aspect of our operations.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center">
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">LEARN MORE</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
