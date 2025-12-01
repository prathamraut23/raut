
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown, CheckCircle, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useDictionary } from '@/context/DictionaryProvider';
import { usePathname } from 'next/navigation';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const aboutHeroImage = getImage('about-hero');

export default function AboutPage() {
  const dictionary = useDictionary();
  const t = dictionary.about;
  const lang = usePathname().split('/')[1];

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
          <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">{t.heroTitle}</h1>
          <p className="mt-2 max-w-3xl text-base md:text-lg font-body px-4">{t.heroSubtitle}</p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.storyTitle}</h2>
            <p className="mt-2 text-lg md:text-xl font-headline">{t.storySubtitle}</p>
          </div>

          <div className="space-y-12 font-body text-lg text-foreground/80 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">{t.farmerStruggleTitle}</h3>
              <p>{t.farmerStruggleP1}</p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">{t.hiddenMarketTitle}</h3>
              <p>{t.hiddenMarketP1}</p>
              <ul className="mt-4 space-y-2 list-none text-left inline-block">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">{t.marketBullet1.split(' ')[0]}</span> {t.marketBullet1.substring(t.marketBullet1.indexOf(' ')+1)}</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">{t.marketBullet2.split(' ')[0]}</span> {t.marketBullet2.substring(t.marketBullet2.indexOf(' ')+1)}</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">{t.marketBullet3.split(' ')[0]}</span> {t.marketBullet3.substring(t.marketBullet3.indexOf(' ')+1)}</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">{t.marketBullet4.split(' ')[0]}</span> {t.marketBullet4.substring(t.marketBullet4.indexOf(' ')+1)}</span></li>
              </ul>
              <p className="mt-4">{t.hiddenMarketP2}</p>
            </div>

            <div className="flex justify-center">
                <ArrowDown className="h-12 w-12 text-primary/50 animate-bounce" />
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">{t.turningPointTitle}</h3>
              <p>{t.turningPointP1}</p>
              <p className="mt-4">{t.turningPointP2}</p>
            </div>
            
            <div className="text-center bg-primary/5 p-6 md:p-8 rounded-lg shadow-inner">
                <Flame className="h-12 w-12 text-primary mx-auto mb-4"/>
              <h3 className="font-bold text-2xl mb-2 text-primary">{t.movementTitle}</h3>
              <p>{t.movementP1}</p>
              <p className="mt-6 italic font-headline text-xl md:text-2xl">{t.movementQuote}</p>
            </div>

            <div className="text-center">
                <p>{t.whoWeAreP}</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">{t.coreValuesTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{t.coreValuesDesc}</p>
                </CardContent>
            </Card>
        </section>

        {/* CTA */}
        <section className="text-center mb-20">
            <Button asChild size="lg" className="mt-8">
                <Link href={`/${lang}/contact`}>{t.learnMore}</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
