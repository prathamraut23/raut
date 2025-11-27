
import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


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

const workImages = [
    {
        src: "https://media.istockphoto.com/id/1180067245/photo/the-working-of-citrus-fruits.jpg?s=612x612&w=0&k=20&c=_5kfpVaDxGTwmVWUOYkcZrgQb3mzKVrJ246KYHzBxTQ=",
        alt: "Citrus fruits being processed on a conveyor belt."
    },
    {
        src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iU0Vn1Ij7MO0/v0/-1x-1.webp",
        alt: "Close up of oranges on a sorting machine."
    },
    {
        src: "https://media.istockphoto.com/id/1354043901/photo/washing-peaches-on-production-line-in-packaging-workshop.jpg?s=612x612&w=0&k=20&c=_st7yCp53f79rOhyiB0_li9TmIYxgSWwGsq2Z_9_mbk=",
        alt: "Peaches being washed on a production line."
    },
    {
        src: "https://media.istockphoto.com/id/1312405786/photo/close-up-orange-citrus-washing-on-conveyor-belt-at-fruits-automation-water-spray-cleaning.jpg?s=612x612&w=0&k=20&c=O7xGcVddQB6QusZpIwuPT5rEPqF9gLuTtwocLZRwJOw=",
        alt: "Oranges being washed by water spray on an automated conveyor belt."
    }
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
            <div></div>
          </div>
        </section>

        {/* About Work Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">About Our Work</h2>
            <p className="mt-2 text-xl font-headline">Grading and Sorting</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {workImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 w-full rounded-lg shadow-xl overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
            <div className="font-body text-lg text-foreground/80 space-y-4">
              <p>
                At RAUT FARMER PRODUCER COMPANY, our grading and sorting process is carried out with a mix of advanced technology and skilled human supervision. Optical sensors and automated machinery examine each orange for size, color, texture, weight, and external quality to ensure accuracy and uniformity. Our trained team further performs manual checks to remove any imperfect fruits and maintain consistent standards.
              </p>
              <p>
                After grading, the oranges go through a careful washing and waxing process. This helps remove dust, enhances the natural shine of the fruit, improves shelf life, and keeps the oranges fresh during transport. Once prepared, each batch is packed using high-quality materials that protect the fruit and enhance its visual appeal.
              </p>
              <p>
                Every step follows strict hygiene and quality control guidelines, allowing us to deliver clean, fresh, and premium-grade oranges ready for markets, retailers, and long-distance supply.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-20">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">Our Core Values</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>At RAUT FARMER PRODUCER COMPANY, our core values guide everything we do. We focus on excellence, unity, and innovation to maintain high quality in all our operations. Transparency and integrity help us build trust with our stakeholders, while our commitment to community welfare, environmental care, and fair practices drives our work. With a passion for citrus excellence, we ensure every orange reflects our dedication to sustainability and quality.</p>
                </CardContent>
            </Card>
        </section>

        {/* CTA */}
        <section className="text-center mb-20">
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">LEARN MORE</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
