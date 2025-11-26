import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Citrus, Eye, Goal, HeartHandshake, Leaf, Lightbulb, Scaling, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const heroImage = getImage('hero-home');
const aboutTeaserImage = getImage('about-teaser');

const services = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Sustainable Farming',
    description: 'We employ eco-friendly farming practices to cultivate the highest quality oranges, ensuring a healthy planet and a healthy you.',
    image: getImage('service-farming'),
  },
  {
    icon: <Scaling className="h-10 w-10 text-primary" />,
    title: 'Advanced Sorting & Grading',
    description: 'Utilizing state-of-the-art technology, we sort and grade our oranges to meet the highest standards of quality and size.',
    image: getImage('service-sorting'),
  },
  {
    icon: <Citrus className="h-10 w-10 text-primary" />,
    title: 'Complete Ecosystem',
    description: 'From soil health to market access, we support our farmers at every step, creating a thriving agricultural ecosystem.',
    image: getImage('service-ecosystem'),
  },
];

const values = [
  { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: 'Community', description: 'Fostering a strong, supportive network of farmers.' },
  { icon: <Leaf className="h-8 w-8 text-primary" />, title: 'Sustainability', description: 'Committing to environmentally conscious farming methods.' },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'Quality', description: 'Delivering only the best produce to our customers.' },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: 'Innovation', description: 'Embracing new technologies and techniques for better yields.' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl font-bold text-shadow-lg">
            Cultivating Excellence, From Farm to Table.
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg md:text-xl">
            Raut Farmer Producer Company is dedicated to empowering farmers and delivering the freshest, highest-quality oranges through sustainable and innovative practices.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/about">Learn More <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Teaser */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
            <p className="font-body text-lg text-foreground/80">
              Raut Farmer Producer Company is a collective of passionate farmers from the heart of India's orange country. We came together with a shared dream: to combine our ancestral knowledge with modern agricultural science to grow exceptional produce while uplifting our community.
            </p>
            <p className="font-body text-foreground/70">
              Our cooperative model ensures that every farmer benefits from shared resources, technology, and market access, creating a sustainable and prosperous future for all.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative h-80 w-full rounded-lg shadow-xl overflow-hidden">
            {aboutTeaserImage && (
              <Image
                src={aboutTeaserImage.imageUrl}
                alt={aboutTeaserImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutTeaserImage.imageHint}
              />
            )}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Services</h2>
            <p className="mt-2 max-w-2xl mx-auto font-body text-lg text-foreground/70">
              We provide a comprehensive suite of services to support our farmers and ensure top-quality produce.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
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
                <CardHeader className="flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="font-body text-foreground/70 flex-grow">
                  {service.description}
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button asChild>
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
        </section>
        
        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-secondary/60 border-primary/20">
                <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    To be a leading global model for sustainable and community-centric agriculture, recognized for our quality, integrity, and positive impact.
                </CardContent>
            </Card>
             <Card className="bg-secondary/60 border-primary/20">
                <CardHeader className="flex-row items-center gap-4">
                    <Goal className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    To empower our farmers with the tools, knowledge, and market access needed to thrive, while delivering superior-quality produce to consumers worldwide.
                </CardContent>
            </Card>
        </section>

        {/* Core Values */}
        <section>
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="mt-2 max-w-2xl mx-auto font-body text-lg text-foreground/70">
              The principles that guide every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-2">
                        {value.icon}
                    </div>
                    <h3 className="font-headline text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm font-body text-foreground/70">{value.description}</p>
                </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
