
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
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

// export const metadata: Metadata = {
//   title: 'Our Services | Raut Orange Ecosystem',
//   description: 'Explore the comprehensive services offered by Raut Farmer Producer Company, from sustainable orange farming and advanced sorting to complete ecosystem support for our farmers.',
// };

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const services = [
  {
    title: 'Maximized Farmer Income',
    description: 'We believe the strength of agriculture depends on the prosperity of farmers. Through accurate grading and efficient marketing, we help farmers get the best value for their produce. This improves their income, strengthens their confidence, and supports long-term sustainable farming.',
    image: getImage('service-detail-farming')
  },
  {
    title: 'Digital Enablement of Farmers',
    description: 'We empower farmers with fast digital payments that improve cash flow and help build credit histories for better financial access. We also use AI tools to monitor orange crops, predict early diseases, and provide timely recommendations, helping farmers reduce losses and improve productivity.',
    image: getImage('service-detail-sorting')
  },
  {
    title: 'Strengthening Agri-Ecosystem',
    description: 'We aim to build a strong and sustainable agricultural ecosystem by ensuring fair pricing, quality produce, and expert advisory support. We encourage responsible farming practices and better resource use, helping farmers grow steadily while strengthening the overall agri-community.',
    image: getImage('service-detail-support')
  },
];

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

export default function ServicesPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

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
       <section 
        className="relative py-20 text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.wikifarmer.com/images/detailed/2017/06/Growing-Orange-Trees-commercially.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">Our Services</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-white/90">
                Providing end-to-end solutions to build a resilient and prosperous agricultural community.
            </p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* About Work Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">About Our Work</h2>
            <p className="mt-2 text-lg md:text-xl font-headline">Grading and Sorting</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {workImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-80 md:h-96 w-full rounded-lg shadow-xl overflow-hidden">
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
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-12 md:w-12 rounded-full bg-black/30 text-white hover:bg-black/50 border-none" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 md:h-12 md:w-12 rounded-full bg-black/30 text-white hover:bg-black/50 border-none" />
              </Carousel>
              <div className="flex justify-center gap-2 mt-4">
                {workImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-colors ${
                      current === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
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

        <section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">For Farmers</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-foreground/80">
                At RAUT FARMER PRODUCER COMPANY, we help farmers adopt innovative, sustainable techniques for long-term success, making efficient use of resources to ensure a resilient future in agriculture.
            </p>
        </section>

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
