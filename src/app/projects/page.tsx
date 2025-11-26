import Image from 'next/image';
import { Metadata } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Our Projects | Raut Orange Ecosystem',
  description: 'Discover the innovative projects and initiatives undertaken by Raut Farmer Producer Company to promote sustainable agriculture and community development.',
};

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const projects = [
  { title: 'Drip Irrigation Implementation', category: 'Water Management', image: getImage('project-1') },
  { title: 'Solar Powered Farm Facilities', category: 'Renewable Energy', image: getImage('project-2') },
  { title: 'Farmer Training Program', category: 'Community Development', image: getImage('project-3') },
  { title: 'Precision Agriculture with Drones', category: 'Technology', image: getImage('project-4') },
  { title: 'Eco-Friendly Packaging Unit', category: 'Value Addition', image: getImage('project-5') },
  { title: 'Organic Waste Composting', category: 'Sustainability', image: getImage('project-6') },
  { title: 'Community Water Reservoir', category: 'Water Management', image: getImage('project-7') },
  { title: 'High-Yield Sapling Nursery', category: 'Farming', image: getImage('project-8') },
];

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
