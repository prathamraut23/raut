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
          <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">About Our Company</h1>
          <p className="mt-2 max-w-3xl text-lg font-body">Our Story: Rooted in Community, Grown with Purpose</p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
              <p className="font-body text-lg text-foreground/80">
                Founded in 2015, Raut Farmer Producer Company began with a simple yet powerful idea: to unite the small-scale orange growers of our region into a formidable collective. We saw the potential to not only improve livelihoods but also to set new benchmarks for quality and sustainability in the agricultural sector.
              </p>
              <p className="font-body text-foreground/70">
                Starting with just a handful of families, we have grown into a robust organization representing hundreds of farmers. Our journey has been one of collaboration, innovation, and unwavering commitment to our founding principles. We have transformed challenges into opportunities, building a state-of-the-art infrastructure for sorting, grading, and processing, ensuring that our farmers' hard work is justly rewarded in the marketplace.
              </p>
               <p className="font-body text-foreground/70">
                Today, we stand as a testament to the power of cooperation, proving that when farmers work together, they can cultivate a brighter future for themselves and their communities.
              </p>
            </div>
            <div className="space-y-6">
                <Card className="bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-2xl text-primary">Our Objectives</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {objectives.map((obj, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="font-body text-foreground/80">{obj}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-secondary/60 rounded-lg py-16 px-6 md:px-10 mb-20">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet Our Leadership</h2>
            <p className="mt-2 max-w-2xl mx-auto font-body text-lg text-foreground/70">
              The driving force behind our mission and success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-lg">
                 <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                        {member.image && (
                            <Image
                                src={member.image.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                fill
                                className="object-cover rounded-t-lg"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                data-ai-hint={member.image.imageHint}
                            />
                        )}
                    </div>
                    <div className="p-6">
                        <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                        <p className="text-primary font-medium font-body">{member.title}</p>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center">
            <h2 className="text-3xl font-bold text-primary">Join Our Mission</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg font-body text-foreground/80">
                Whether you are a farmer, a potential partner, or a customer, we invite you to connect with us and be a part of our journey towards a sustainable agricultural future.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Get In Touch</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
