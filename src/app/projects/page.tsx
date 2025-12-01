
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
  { title: 'ठिबक सिंचन अंमलबजावणी', category: 'जल व्यवस्थापन', image: getImage('project-1') },
  { title: 'सौर ऊर्जेवर चालणाऱ्या शेती सुविधा', category: 'नवीकरणीय ऊर्जा', image: getImage('project-2') },
  { title: 'शेतकरी प्रशिक्षण कार्यक्रम', category: 'सामाजिक विकास', image: getImage('project-3') },
  { title: 'तंत्रज्ञानासह अचूक शेती', category: 'तंत्रज्ञान', image: getImage('project-4') },
  { title: 'पर्यावरणास अनुकूल पॅकेजिंग युनिट', category: 'मूल्यवर्धन', image: getImage('project-5') },
  { title: 'सेंद्रिय कचरा कंपोस्टिंग', category: 'शाश्वतता', image: getImage('project-6') },
  { title: 'सामुदायिक जलसाठा', category: 'जल व्यवस्थापन', image: getImage('project-7') },
  { title: 'उच्च-उत्पन्न रोपवाटिका', category: 'शेती', image: getImage('project-8') },
];

const upcomingProjects = [
  {
    title: 'कोल्ड स्टोरेज',
    description: 'आमचा आगामी कोल्ड स्टोरेज प्रकल्प संत्र्यांची ताजेपणा आणि गुणवत्ता दीर्घकाळ टिकवून ठेवण्यास मदत करेल. ही सुविधा काढणीनंतरचे नुकसान कमी करेल आणि शेतकऱ्यांना संपूर्ण हंगामात प्रीमियम फळ पुरवठा करता येईल याची खात्री करेल.',
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
    title: 'रस काढणे',
    description: 'आमचा आगामी रस काढण्याचा प्रकल्प ताज्या संत्र्यांना रस आणि पेय प्रक्रियेसाठी उच्च-गुणवत्तेच्या रसामध्ये रूपांतरित करेल. हा उपक्रम मूल्यवर्धन वाढवेल, अपव्यय कमी करेल आणि रस उत्पादकांना प्रीमियम कच्चा माल पुरवून शेतकऱ्यांसाठी नवीन बाजार संधी निर्माण करेल.',
    images: [
        { src: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448845617/CL/MN/XJ/199588357/fruit-juice.jpg', alt: 'Fruit juice processing', imageHint: 'juice processing' },
        { src: 'https://www.ticomachine.com/uploads/allimg/orange-juice-extraction.jpg', alt: 'Orange juice extraction machine', imageHint: 'juice extraction' },
        { src: 'https://image.made-in-china.com/2f0j00KyIaHROgHpbW/Orange-Juice-Machine-Orange-Juice-Processing-Machines.webp', alt: 'Orange juice processing machines', imageHint: 'juice machines' },
        { src: 'https://i.ytimg.com/vi/bnf3f64fwdA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaT9QZwVjZcCKxYDXEgvUNOPRsLg', alt: 'Orange juice production line', imageHint: 'juice production' },
        { src: 'https://organicobeverages.com/wp-content/uploads/2018/08/shutterstock_650425732.jpg', alt: 'Fresh orange juice in glasses', imageHint: 'orange juice glasses' },
        { src: 'https://i.ytimg.com/vi/tMmDe0OYT_Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB3N-AIr3snhoh7Dj-a2MnokicB7A', alt: 'Commercial orange juicer', imageHint: 'commercial juicer' },
    ],
  },
  {
    title: 'संत्र्याच्या सालीची पावडर',
    subtitle: '(सौंदर्यप्रसाधनांच्या वापरासाठी)',
    description: 'आमचा आगामी संत्र्याच्या सालीच्या पावडरचा प्रकल्प ताज्या संत्र्यांच्या सालींना नैसर्गिक व्हिटॅमिन सीने समृद्ध असलेल्या उच्च-गुणवत्तेच्या, कॉस्मेटिक-ग्रेड पावडरमध्ये रूपांतरित करेल. हा उपक्रम मूल्यवर्धनास समर्थन देईल, कचरा कमी करेल आणि सीरम, मास्क आणि सनस्क्रीन सारख्या त्वचेच्या काळजी उत्पादनांसाठी घटक पुरवेल.',
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
                aria-label={`स्लाइड ${index + 1} वर जा`}
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
      <section 
        className="relative py-20 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ytimg.com/vi/pVwD8ByGLc8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB94G0olceTMOifbJlPNVZfZcuvLw')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl tracking-tighter md:text-6xl font-bold text-white">आमचे प्रकल्प</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-white/90">
                नाविन्य, शाश्वतता आणि सामुदायिक सक्षमीकरणासाठी आमची वचनबद्धता कृतीतून दर्शवत आहोत.
            </p>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">आमचे आगामी प्रकल्प</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project) => (
              <UpcomingProjectCarousel key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="text-center my-16 bg-primary/5 p-8 rounded-lg">
          <p className="max-w-3xl mx-auto text-lg font-body text-foreground/80">
            राऊत शेतकरी उत्पादक कंपनीमध्ये, आमचा लोगो केवळ एक ब्रँड नाही; तो आशा, वाढ आणि शाश्वततेचे प्रतीक आहे. आम्ही कृषी नवोपक्रमात पुढे जात असताना, आम्ही तुम्हाला एका हिरव्या, समृद्ध भविष्याचे संगोपन करण्यासाठी आमच्यात सामील होण्यासाठी आमंत्रित करतो. आमची वचनबद्धता व्यवसायाच्या पलीकडे आहे — आम्ही शेतकऱ्यांना सक्षम करणे, शाश्वत पद्धतींना प्रोत्साहन देणे आणि दीर्घकालीन समृद्धीसाठी एक लवचिक परिसंस्था तयार करणे यावर लक्ष केंद्रित करतो.
          </p>
          <p className="mt-4 font-bold text-primary">
            #शाश्वतशेती #शेतकरीसक्षमीकरण #कृषीनवोपक्रम
          </p>
        </section>

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
                        अधिक जाणून घ्या
                      </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        <section className="text-center mt-24">
            <h2 className="text-3xl font-bold text-primary">तुमच्याकडे काही प्रकल्प कल्पना आहे का?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg font-body text-foreground/80">
                आम्ही नेहमी नवनवीन संधी आणि सहयोगाच्या शोधात असतो. जर तुमच्याकडे आमच्या ध्येयाशी जुळणारा प्रकल्प असेल, तर आम्हाला तुमच्याकडून ऐकायला आवडेल.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">एक प्रकल्प प्रस्तावित करा</Link>
            </Button>
        </section>
      </main>
    </div>
  )
}
