
'use client';

import Image from 'next/image';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, CheckCircle, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';


// Note: Metadata is not used in client components, but we'll keep it for when this page might be server-rendered in the future.
// export const metadata: Metadata = {
//   title: 'About Us | Raut Orange Ecosystem',
//   description: 'Learn about the history, mission, vision, and the dedicated team behind Raut Farmer Producer Company.',
// };

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const aboutHeroImage = getImage('about-hero');

const workImages = [
    {
        src: "https://futura-centralasia.com/en/uploads/sections/969/original.jpg",
        alt: "Orange sorting machine in action."
    },
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
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[40vh] min-h-[300px] w-full bg-secondary">
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
          <p className="mt-2 max-w-3xl text-base md:text-lg font-body px-4">Step into a citrus paradise with RAUT FARMER PRODUCER COMPANY, where the tantalizing world of premium oranges awaits your senses.</p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Story: From Helplessness to Empowerment</h2>
            <p className="mt-2 text-lg md:text-xl font-headline">How we reclaimed our value, one orange at a time.</p>
          </div>

          <div className="space-y-12 font-body text-lg text-foreground/80 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">The Struggle of the Farmer</h3>
              <p>
                For decades, our ancestors grew some of the finest oranges in the region. But like many farmers, we had no direct link to the market. Agents controlled everything — the rates, the grading, and even the value of our hard work. They would tell us our oranges were "too small," the color "wasn’t right," or the grade was "low." For the same batch of fruit, we received three or four different prices, leaving farmers confused and helpless.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">The Hidden Market</h3>
              <p>
                What we didn’t know then — but slowly discovered — was how the agents secretly segregated and sold our oranges. The system was designed to keep the profits from those who earned it most.
              </p>
              <ul className="mt-4 space-y-2 list-none text-left inline-block">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">Highest-grade fruit</span> was exported outside India.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">Medium-grade fruit</span> went to Kashmir, malls, and big markets.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">Semi-medium fruit</span> was sent to local mandis.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">Lowest-grade fruit</span> went for juice or peel powder.</span></li>
              </ul>
              <p className="mt-4">They even stored fruit in cold storage for a month and sold it later at double the price. From every grade, they made more profit than the farmers who worked under the sun all year.</p>
            </div>

            <div className="flex justify-center">
                <ArrowDown className="h-12 w-12 text-primary/50 animate-bounce" />
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">The Turning Point: Knowledge is Power</h3>
              <p>
                As we studied the orange market across India, one truth became clear: farmers were losing because we didn’t have access to grading, sorting, processing, or storage. The knowledge was hidden from us.
              </p>
              <p className="mt-4">
                But step by step, we learned. We learned how to grade. We learned how to sort. We learned how to wash and wax. We learned how the market <span className="font-bold italic">truly</span> works. And with this knowledge, we decided something powerful — <span className="font-bold">farmers must stand together.</span>
              </p>
            </div>
            
            <div className="text-center bg-primary/5 p-6 md:p-8 rounded-lg shadow-inner">
                <Flame className="h-12 w-12 text-primary mx-auto mb-4"/>
              <h3 className="font-bold text-2xl mb-2 text-primary">The Birth of a Movement</h3>
              <p>
                This realization led to the creation of <strong>RAUT FARMER PRODUCER COMPANY</strong>. A platform built by farmers, for farmers. A place where we process our own oranges, set fair prices, reduce wastage, and capture the profit that once disappeared into the pockets of middlemen. Today, many farmers who join us earn better, feel empowered, and finally receive the respect their hard work deserves.
              </p>
              <p className="mt-6 italic font-headline text-xl md:text-2xl">
                "We are not just an orange company. We are a movement — a journey of learning, unity, and reclaiming our value."
              </p>
            </div>

            <div className="text-center">
                <p>This is who we are, how we started, and why we are here: to transform the lives of farmers, to bring transparency to the market, and to build a future where the hands that grow food finally prosper.</p>
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

    
