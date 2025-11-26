import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookUser, CheckCircle, Citrus, Eye, Goal, HeartHandshake, Leaf, Lightbulb, Scaling, ShieldCheck } from 'lucide-react';
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
  },
  {
    icon: <Scaling className="h-10 w-10 text-primary" />,
    title: 'Advanced Sorting & Grading',
    description: 'Utilizing state-of-the-art technology, we sort and grade our oranges to meet the highest standards of quality and size.',
  },
  {
    icon: <Citrus className="h-10 w-10 text-primary" />,
    title: 'Complete Ecosystem',
    description: 'From soil health to market access, we support our farmers at every step, creating a thriving agricultural ecosystem.',
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
        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left text-white container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl font-body">Explore The World Of Oranges</p>
          <h1 className="text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl font-bold text-shadow-lg max-w-2xl">
            RAUT FARMER PRODUCER COMPANY
          </h1>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">LEARN MORE</Link>
          </Button>
        </div>
      </section>
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Teaser */}
        <section className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
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
        </section>

        {/* Company at a Glance */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">COMPANY AT A GLANCE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative h-96 w-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1547514701-42782101795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxvcmFuZ2VzfGVufDB8fHx8MTc2NDE4MDA3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="A pile of fresh oranges."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint="oranges"
                />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Personalised Advisory</h3>
              <p className="font-body text-foreground/80">
                Our experienced agronomists offer tailored guidance based on soil composition, water availability, crop stage, and market requirements. This personalised approach helps farmers achieve optimal yield and a balanced grade mix.
              </p>
              <p className="font-body text-foreground/70">
                Our experts go beyond advice — they help build success stories in the field. From soil to market, their knowledge turns challenges into opportunities, ensuring not just better crops, but a harvest of consistency, quality, and excellence.
              </p>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">OUR SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden group">
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
        </section>
        
        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-secondary/60">
                <CardHeader className="flex-row items-center gap-4">
                    <Goal className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    The mission of RAUT FARMER PRODUCER COMPANY is to build a strong platform for small and marginal farmers, helping them achieve a decent life with economic independence and social upliftment. We are committed to improving the livelihoods of farmers by organizing them, standardizing their processes, increasing production, and promoting sustainability. Our goal is to empower the weaker sections of society and support their overall economic and social development.
                </CardContent>
            </Card>
             <Card className="bg-secondary/60">
                <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    The vision of RAUT FARMER PRODUCER COMPANY is to support better growth for farmers and producers through strong economic and social development. We aim to contribute to society by focusing on the well-being of the agricultural community. Our commitment includes promoting sustainable practices, encouraging innovation, and creating opportunities for continuous progress. We envision a future of collaborative growth where all stakeholders work together toward shared prosperity and long-term sustainability.
                </CardContent>
            </Card>
        </section>

        {/* Objectives Section */}
        <section 
          className="relative rounded-lg p-8 md:p-12 mb-20 text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://storage.googleapis.com/stabl-media/assets/images/oranges-bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                <div className="md:col-span-1 flex justify-center">
                   <BookUser className="h-24 w-24" />
                </div>
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">OBJECTIVES</h2>
                    <p className="font-body text-lg">
                        Our primary objective is to create greater value for our produce by organizing farmers into effective, collaborative groups. This approach not only improves the quality of our oranges but also increases farmers’ income through better production practices, collective marketing, and value addition. We are committed to building a strong, sustainable agricultural ecosystem and invite you to join us on this journey toward growth and prosperity.
                    </p>
                </div>
            </div>
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
