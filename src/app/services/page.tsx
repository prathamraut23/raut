
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
    title: 'शेतकऱ्यांचे उत्पन्न वाढवणे',
    description: 'शेतीची ताकद शेतकऱ्यांच्या समृद्धीवर अवलंबून असते असे आम्ही मानतो. अचूक प्रतवारी आणि प्रभावी विपणनाद्वारे, आम्ही शेतकऱ्यांना त्यांच्या उत्पादनासाठी सर्वोत्तम मूल्य मिळविण्यात मदत करतो. यामुळे त्यांचे उत्पन्न सुधारते, त्यांचा आत्मविश्वास वाढतो आणि दीर्घकालीन शाश्वत शेतीला पाठिंबा मिळतो.',
    image: getImage('service-detail-farming')
  },
  {
    title: 'शेतकऱ्यांचे डिजिटल सक्षमीकरण',
    description: 'आम्ही शेतकऱ्यांना जलद डिजिटल पेमेंटसह सक्षम करतो ज्यामुळे रोख प्रवाह सुधारतो आणि उत्तम आर्थिक सुविधेसाठी क्रेडिट इतिहास तयार करण्यात मदत होते. आम्ही संत्रा पिकांवर लक्ष ठेवण्यासाठी, लवकर रोगांचे निदान करण्यासाठी आणि वेळेवर शिफारसी देण्यासाठी AI साधनांचा वापर करतो, ज्यामुळे शेतकऱ्यांना नुकसान कमी करण्यास आणि उत्पादकता सुधारण्यास मदत होते.',
    image: getImage('service-detail-sorting')
  },
  {
    title: 'कृषी-परिसंस्थेला बळकट करणे',
    description: 'आम्ही योग्य किंमत, दर्जेदार उत्पादन आणि तज्ञ सल्लागार समर्थनाची खात्री करून एक मजबूत आणि शाश्वत कृषी परिसंस्था तयार करण्याचे ध्येय ठेवतो. आम्ही जबाबदार शेती पद्धती आणि संसाधनांचा अधिक चांगला वापर करण्यास प्रोत्साहित करतो, ज्यामुळे शेतकऱ्यांना स्थिरपणे वाढण्यास मदत होते आणि संपूर्ण कृषी-समुदायाला बळकटी मिळते.',
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
            <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">आमच्या सेवा</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-white/90">
                एक लवचिक आणि समृद्ध कृषी समुदाय तयार करण्यासाठी एंड-टू-एंड उपाय प्रदान करणे.
            </p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* About Work Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">आमच्या कामाबद्दल</h2>
            <p className="mt-2 text-lg md:text-xl font-headline">प्रतवारी आणि वर्गीकरण</p>
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
                    aria-label={`स्लाइड ${index + 1} वर जा`}
                  />
                ))}
              </div>
            </div>
            <div className="font-body text-lg text-foreground/80 space-y-4">
              <p>
                राऊत शेतकरी उत्पादक कंपनीमध्ये, आमची प्रतवारी आणि वर्गीकरण प्रक्रिया प्रगत तंत्रज्ञान आणि कुशल मानवी पर्यवेक्षणाच्या मिश्रणाने केली जाते. ऑप्टिकल सेन्सर आणि स्वयंचलित यंत्रसामग्री प्रत्येक संत्र्याची आकार, रंग, पोत, वजन आणि बाह्य गुणवत्तेसाठी तपासणी करतात जेणेकरून अचूकता आणि एकसमानता सुनिश्चित होईल. आमची प्रशिक्षित टीम कोणत्याही अपूर्ण फळांना काढून टाकण्यासाठी आणि सातत्यपूर्ण मानके राखण्यासाठी पुढील मॅन्युअल तपासणी करते.
              </p>
              <p>
                प्रतवारीनंतर, संत्री काळजीपूर्वक धुण्याची आणि वॅक्सिंगची प्रक्रिया पार पाडतात. यामुळे धूळ काढून टाकण्यास, फळाची नैसर्गिक चमक वाढविण्यात, शेल्फ लाइफ सुधारण्यास आणि वाहतुकीदरम्यान संत्री ताजी ठेवण्यास मदत होते. तयार झाल्यावर, प्रत्येक तुकडी उच्च-गुणवत्तेच्या सामग्रीचा वापर करून पॅक केली जाते जी फळाचे संरक्षण करते आणि त्याचे दृश्य आकर्षण वाढवते.
              </p>
              <p>
                प्रत्येक टप्पा कठोर स्वच्छता आणि गुणवत्ता नियंत्रण मार्गदर्शक तत्त्वांचे पालन करतो, ज्यामुळे आम्हाला स्वच्छ, ताजे आणि प्रीमियम-ग्रेड संत्री बाजारात, किरकोळ विक्रेत्यांना आणि लांब पल्ल्याच्या पुरवठ्यासाठी तयार करता येतात.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">शेतकऱ्यांसाठी</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-foreground/80">
                राऊत शेतकरी उत्पादक कंपनीमध्ये, आम्ही शेतकऱ्यांना दीर्घकालीन यशासाठी नाविन्यपूर्ण, शाश्वत तंत्रे अवलंबण्यास मदत करतो, संसाधनांचा प्रभावी वापर करून शेतीत एक लवचिक भविष्य सुनिश्चित करतो.
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
            <h2 className="text-3xl font-bold text-primary">आमच्यासोबत वाढण्यास तयार आहात?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg font-body text-foreground/80">
                आमच्या सेवा तुम्हाला कसा फायदा देऊ शकतात याबद्दल अधिक जाणून घेण्यासाठी आमच्या टीमशी संपर्क साधा.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">आमच्या टीमशी संपर्क साधा</Link>
            </Button>
        </section>

      </main>
    </div>
  )
}
