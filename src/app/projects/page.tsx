
'use client';

import Image from 'next/image';
import { Metadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
//   title: 'Our Projects | Raut Orange Ecosystem',
//   description: 'Discover the innovative projects and initiatives undertaken by Raut Farmer Producer Company to promote sustainable agriculture and community development.',
// };

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const projects = [
  { title: 'Drip Irrigation Implementation', category: 'Water Management', image: getImage('project-1') },
  { title: 'Solar Powered Farm Facilities', category: 'Renewable Energy', image: getImage('project-2') },
  { title: 'Farmer Training Program', category: 'Community Development', image: getImage('project-3') },
  { title: 'Precision Agriculture with Technology', category: 'Technology', image: getImage('project-4') },
  { title: 'Eco-Friendly Packaging Unit', category: 'Value Addition', image: getImage('project-5') },
  { title: 'Organic Waste Composting', category: 'Sustainability', image: getImage('project-6') },
  { title: 'Community Water Reservoir', category: 'Water Management', image: getImage('project-7') },
  { title: 'High-Yield Sapling Nursery', category: 'Farming', image: getImage('project-8') },
];

const upcomingProjects = [
  {
    title: 'Cold Storage',
    description: 'Our upcoming cold storage project will help preserve the freshness and quality of oranges for longer periods. This facility will reduce post-harvest losses and ensure that farmers can supply premium fruit throughout the season.',
    images: [
        {
            src: "https://www.novasogutma.com/upload/sayfa/s_57390/narenciye-soguk-oda-deposu-an2G.gif",
            alt: "Animated diagram of a cold storage facility.",
            imageHint: "cold storage diagram"
        },
        {
            src: "https://5.imimg.com/data5/SELLER/Default/2023/4/303617560/HI/AG/KR/75313703/vegetable-cold-storage-plant.jpg",
            alt: "Interior of a large, modern cold storage plant.",
            imageHint: "cold storage interior"
        },
        {
            src: "https://live.staticflickr.com/2487/3807239571_69feafd89a_b.jpg",
            alt: "Oranges stored in crates inside a cold storage room.",
            imageHint: "oranges cold storage"
        },
        {
            src: "https://gumlet.assettype.com/down-to-earth/import/library/large/2022-11-14/0.85784900_1668431134_istock-1301368439.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
            alt: "Oranges being stored in a modern cold storage facility.",
            imageHint: "cold storage oranges"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBdrcP8ArK3DtHFqZes5xVTopm5L4V5kUUioogoOvvGomnE3SJX4rmfi25m5T7GVnBRs&usqp=CAU",
            alt: "Crates of oranges in cold storage.",
            imageHint: "oranges crates"
        },
        {
            src: "https://5.imimg.com/data5/UE/YF/MP/SELLER-1617695/cold-storage-for-mango-pulp.jpg",
            alt: "Inside of a cold storage facility with crates.",
            imageHint: "cold storage crates"
        }
    ],
  },
  {
    title: 'Advanced Sorting & Grading',
    description: 'Utilizing state-of-the-art technology, we sort and grade our oranges to meet the highest standards of quality and size.',
    images: [{ src: getImage('service-sorting')?.imageUrl, alt: getImage('service-sorting')?.description, imageHint: getImage('service-sorting')?.imageHint }],
  },
  {
    title: 'Orange Peel Powder',
    subtitle: '(for cosmetic use)',
    description: 'Our upcoming orange peel powder project will convert fresh orange peels into high-quality, cosmetic-grade powder rich in natural Vitamin C. This initiative will support value addition, reduce waste, and supply ingredients for skincare products like serums, masks, and sunscreens.',
    images: [
      { src: 'https://images.herzindagi.info/image/2019/Oct/orange-peel-face-mask.jpg', alt: 'Orange peel face mask in a bowl', imageHint: 'orange peel mask' },
      { src: 'https://i.ytimg.com/vi/5Hu7b8KoYJM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3xi_wMPiqPn-px5R077X3fpXNmw', alt: 'Orange peel powder being made', imageHint: 'orange peel powder' },
      { src: 'https://www.duurzaamnieuws.nl/wp-content/uploads/2024/08/peelpioneers.jpg', alt: 'Industrial processing of citrus peels', imageHint: 'citrus peel processing' },
      { src: 'https://eu-images.contentstack.com/v3/assets/bltb9ead2d4140390e0/blt460dc5beab1bf42c/6692ac26497604551a8edbe7/PeelPioneers_20transforms_20citrus_20peel_20byproducts_20into_20functional_20ingredients_201_20sent_20from_20PeelPioneers.png', alt: 'Functional ingredients from citrus peel', imageHint: 'citrus ingredients' },
      { src: 'https://i.ytimg.com/vi/aDCgRMXK8-0/maxresdefault.jpg', alt: 'Cosmetic products with orange ingredients', imageHint: 'orange cosmetics' },
      { src: 'https://investinternational.nl/wp-content/uploads/2024/07/Invest-International-Peel-Pioneers-6-scaled.jpg', alt: 'Peel Pioneers facility', imageHint: 'pioneers facility' },
    ],
  },
];


function UpcomingProjectCarousel({ project }: { project: typeof upcomingProjects[number] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Card className="flex flex-col overflow-hidden group">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {project.images.map((image, index) => (
            image?.src &&
            <CarouselItem key={index}>
              <div className="relative h-48 w-full">
                <Image
                  src={image.src}
                  alt={image.alt || project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {project.images.length > 1 && (
            <>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/30 text-white hover:bg-black/50 border-none" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/30 text-white hover:bg-black/50 border-none" />
            </>
        )}
      </Carousel>
       {project.images.length > 1 && (
        <div className="flex justify-center gap-2 pt-4">
            {project.images.map((_, index) => (
            <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                current === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          {project.title}
          {project.subtitle && <span className="font-normal text-lg ml-2">{project.subtitle}</span>}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-body text-foreground/70 flex-grow">
        {project.description}
      </CardContent>
    </Card>
  );
}


export default function ProjectsPage() {
  return (
    <div>
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-bold text-primary">Our Projects</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-foreground/80">
                Showcasing our commitment to innovation, sustainability, and community empowerment through tangible action.
            </p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
                <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
                    <CardHeader className="p-0">
                        <div className="relative h-56 w-full">
                            {project.image && (
                                <Image
                                    src={project.image.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    data-ai-hint={project.image.imageHint}
                                />
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <CardTitle className="font-headline text-xl leading-tight">{project.title}</CardTitle>
                    </CardContent>
                    <CardFooter>
                      {/* In a real app, this could link to a project detail page */}
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">OUR UPCOMING PROJECTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project) => (
              <UpcomingProjectCarousel key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="text-center mt-24">
            <h2 className="text-3xl font-bold text-primary">Have a Project Idea?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg font-body text-foreground/80">
                We are always looking for new opportunities to innovate and collaborate. If you have a project that aligns with our mission, we would love to hear from you.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Propose a Project</Link>
            </Button>
        </section>
      </main>
    </div>
  )
}
