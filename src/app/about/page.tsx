
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
          <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">आमच्याबद्दल</h1>
          <p className="mt-2 max-w-3xl text-base md:text-lg font-body px-4">राऊत शेतकरी उत्पादक कंपनीसोबत लिंबूवर्गीय फळांच्या स्वर्गात पाऊल ठेवा, जिथे उत्कृष्ट संत्र्यांचे मनमोहक जग तुमच्या संवेदनांची प्रतीक्षा करत आहे.</p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">आमची कहाणी: असहाय्यतेकडून सशक्तीकरणाकडे</h2>
            <p className="mt-2 text-lg md:text-xl font-headline">आम्ही आमचे मूल्य कसे परत मिळवले, एका वेळी एक संत्रा.</p>
          </div>

          <div className="space-y-12 font-body text-lg text-foreground/80 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">शेतकऱ्याचा संघर्ष</h3>
              <p>
                दशकांपासून, आमचे पूर्वज या प्रदेशातील काही उत्कृष्ट संत्री पिकवत होते. पण अनेक शेतकऱ्यांप्रमाणेच, आमचा बाजाराशी थेट संबंध नव्हता. एजंट सर्व काही नियंत्रित करत होते - दर, प्रतवारी आणि आमच्या कष्टाचे मूल्यसुद्धा. ते आम्हाला सांगायचे की आमची संत्री "खूप लहान" आहेत, रंग "बरोबर नाही" किंवा प्रत "कमी" आहे. फळांच्या एकाच तुकडीसाठी, आम्हाला तीन-चार वेगवेगळे भाव मिळायचे, ज्यामुळे शेतकरी गोंधळून जायचे आणि असहाय्य व्हायचे.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">लपलेला बाजार</h3>
              <p>
                तेव्हा आम्हाला जे माहीत नव्हते - पण हळूहळू कळले - ते म्हणजे एजंट गुप्तपणे आमची संत्री वेगळी करून कशी विकायचे. ही व्यवस्था अशा प्रकारे तयार केली होती की ज्यांनी सर्वात जास्त कमाई केली होती त्यांना नफा मिळू नये.
              </p>
              <ul className="mt-4 space-y-2 list-none text-left inline-block">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">उच्च प्रतीची फळे</span> भारताबाहेर निर्यात केली जात होती.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">मध्यम प्रतीची फळे</span> काश्मीर, मॉल्स आणि मोठ्या बाजारपेठांमध्ये जात होती.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">अर्ध-मध्यम फळे</span> स्थानिक मंडईत पाठवली जात होती.</span></li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" /><span><span className="font-bold">सर्वात कमी प्रतीची फळे</span> रस किंवा सालीच्या पावडरसाठी जात होती.</span></li>
              </ul>
              <p className="mt-4">ते फळे एका महिन्यासाठी कोल्ड स्टोरेजमध्ये ठेवून नंतर दुप्पट भावाने विकायचे. प्रत्येक प्रतवारीतून, ते वर्षभर उन्हात काम करणाऱ्या शेतकऱ्यांपेक्षा जास्त नफा कमवत होते.</p>
            </div>

            <div className="flex justify-center">
                <ArrowDown className="h-12 w-12 text-primary/50 animate-bounce" />
            </div>

            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">निर्णायक क्षण: ज्ञान हीच शक्ती</h3>
              <p>
                आम्ही संपूर्ण भारतातील संत्र्यांच्या बाजाराचा अभ्यास केला, तेव्हा एक सत्य स्पष्ट झाले: शेतकऱ्यांचे नुकसान होत होते कारण आमच्याकडे प्रतवारी, वर्गीकरण, प्रक्रिया किंवा साठवणुकीची सोय नव्हती. हे ज्ञान आमच्यापासून लपवून ठेवले होते.
              </p>
              <p className="mt-4">
                पण हळूहळू, आम्ही शिकलो. आम्ही प्रतवारी कशी करायची हे शिकलो. आम्ही वर्गीकरण कसे करायचे हे शिकलो. आम्ही धुलाई आणि वॅक्सिंग कसे करायचे हे शिकलो. बाजार <span className="font-bold italic">खरोखर</span> कसा चालतो हे आम्ही शिकलो. आणि या ज्ञानाने, आम्ही एक शक्तिशाली निर्णय घेतला - <span className="font-bold">शेतकऱ्यांनी एकत्र उभे राहिले पाहिजे.</span>
              </p>
            </div>
            
            <div className="text-center bg-primary/5 p-6 md:p-8 rounded-lg shadow-inner">
                <Flame className="h-12 w-12 text-primary mx-auto mb-4"/>
              <h3 className="font-bold text-2xl mb-2 text-primary">एका चळवळीचा जन्म</h3>
              <p>
                या जाणिवेतून <strong>राऊत शेतकरी उत्पादक कंपनी</strong>ची निर्मिती झाली. शेतकऱ्यांनी, शेतकऱ्यांसाठी तयार केलेले एक व्यासपीठ. एक असे ठिकाण जिथे आम्ही आमच्या संत्र्यांवर प्रक्रिया करतो, योग्य दर ठरवतो, अपव्यय कमी करतो आणि तो नफा मिळवतो जो एकेकाळी मध्यस्थांच्या खिशात नाहीसा होत होता. आज, आमच्याशी जोडले जाणारे अनेक शेतकरी चांगले कमावतात, सक्षम झाल्याचे अनुभवतात आणि अखेरीस त्यांच्या कष्टाला योग्य तो आदर मिळवतात.
              </p>
              <p className="mt-6 italic font-headline text-xl md:text-2xl">
                "आम्ही फक्त एक संत्रा कंपनी नाही. आम्ही एक चळवळ आहोत - शिकण्याचा, एकजुटीचा आणि आमचे मूल्य परत मिळवण्याचा प्रवास."
              </p>
            </div>

            <div className="text-center">
                <p>हे आम्ही कोण आहोत, आम्ही कसे सुरू झालो आणि आम्ही येथे का आहोत: शेतकऱ्यांचे जीवन बदलण्यासाठी, बाजारात पारदर्शकता आणण्यासाठी आणि असे भविष्य घडवण्यासाठी जिथे अन्न पिकवणारे हात अखेरीस समृद्ध होतील.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary">आमची मुख्य मूल्ये</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>राऊत शेतकरी उत्पादक कंपनीमध्ये, आमची मुख्य मूल्ये आमच्या प्रत्येक कामाला मार्गदर्शन करतात. आम्ही आमच्या सर्व कार्यांमध्ये उच्च गुणवत्ता राखण्यासाठी उत्कृष्टता, एकता आणि नावीन्य यावर लक्ष केंद्रित करतो. पारदर्शकता आणि सचोटी आम्हाला आमच्या भागधारकांसोबत विश्वास निर्माण करण्यास मदत करते, तर समुदाय कल्याण, पर्यावरण काळजी आणि योग्य पद्धतींबद्दलची आमची वचनबद्धता आमच्या कामाला चालना देते. लिंबूवर्गीय फळांच्या उत्कृष्टतेच्या आवडीने, आम्ही प्रत्येक संत्रा आमचे शाश्वतता आणि गुणवत्तेवरील समर्पण दर्शवेल याची खात्री करतो.</p>
                </CardContent>
            </Card>
        </section>

        {/* CTA */}
        <section className="text-center mb-20">
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">अधिक जाणून घ्या</Link>
            </Button>
        </section>

      </main>
    </div>
  );
}
