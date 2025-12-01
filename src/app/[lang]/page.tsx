
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookUser, CheckCircle, Citrus, Eye, Goal, HeartHandshake, Leaf, Lightbulb, Newspaper, Scaling, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/lib/i18n/i18n-config';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const heroImage = getImage('hero-home');
const aboutTeaserImage = getImage('about-teaser');

export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.home;

  const services = [
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: t.service1Title,
      description: t.service1Desc,
      image: getImage('service-farming'),
    },
    {
      icon: <Scaling className="h-10 w-10 text-primary" />,
      title: t.service2Title,
      description: t.service2Desc,
      image: getImage('service-sorting'),
    },
    {
      icon: <Citrus className="h-10 w-10 text-primary" />,
      title: t.service3Title,
      description: t.service3Desc,
      image: getImage('service-ecosystem'),
    },
  ];

  const values = [
    { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: t.value1Title, description: t.value1Desc },
    { icon: <Leaf className="h-8 w-8 text-primary" />, title: t.value2Title, description: t.value2Desc },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: t.value3Title, description: t.value3Desc },
    { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: t.value4Title, description: t.value4Desc },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[60vh] min-h-[400px] w-full">
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
          <p className="text-lg md:text-xl font-body">{t.heroSubtitle}</p>
          <h1 className="text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl font-bold text-shadow-lg max-w-2xl">
            {t.heroTitle}
          </h1>
          <Button asChild size="lg" className="mt-8">
            <Link href={`/${lang}/about`}>{t.learnMore}</Link>
          </Button>
        </div>
      </section>
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Teaser */}
        <section className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.whoWeAreTitle}</h2>
            <p className="font-body text-lg text-foreground/80">
              {t.whoWeAreP1}
            </p>
            <p className="font-body text-foreground/70">
              {t.whoWeAreP2}
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href={`/${lang}/about`}>{t.readOurStory} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Company at a Glance */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.glanceTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative h-80 md:h-96 w-full rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="https://kj1bcdn.b-cdn.net/media/64107/wp2202603.jpg"
                  alt="A pile of fresh oranges with leaves."
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint="oranges leaves"
                />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{t.glanceSubtitle}</h3>
              <p className="font-body text-lg text-foreground/80">
                {t.glanceP1}
              </p>
              <p className="font-body text-foreground/70">
                {t.glanceP2}
              </p>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t.servicesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      data-ai-hint={service.image.imageHint}
                    />
                  </div>
                )}
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
                    <CardTitle className="text-2xl text-primary">{t.missionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    {t.missionDesc}
                </CardContent>
            </Card>
             <Card className="bg-secondary/60">
                <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">{t.visionTitle}</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    {t.visionDesc}
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
                   <BookUser className="h-16 w-16 md:h-24 md:w-24" />
                </div>
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">{t.objectivesTitle}</h2>
                    <p className="font-body text-lg">
                        {t.objectivesDesc}
                    </p>
                </div>
            </div>
        </section>


        {/* Core Values */}
        <section>
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.valuesTitle}</h2>
            <p className="mt-2 max-w-2xl mx-auto font-body text-lg text-foreground/70">
              {t.valuesDesc}
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
