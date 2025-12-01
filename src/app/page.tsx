
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookUser, CheckCircle, Citrus, Eye, Goal, HeartHandshake, Leaf, Lightbulb, Newspaper, Scaling, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

const heroImage = getImage('hero-home');
const aboutTeaserImage = getImage('about-teaser');


const services = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'शाश्वत शेती',
    description: 'आम्ही उच्च प्रतीची संत्री पिकवण्यासाठी पर्यावरणपूरक शेती पद्धती वापरतो, ज्यामुळे एक निरोगी ग्रह आणि तुमची निरोगी प्रकृती सुनिश्चित होते.',
    image: getImage('service-farming'),
  },
  {
    icon: <Scaling className="h-10 w-10 text-primary" />,
    title: 'प्रगत प्रतवारी आणि वर्गीकरण',
    description: 'अत्याधुनिक तंत्रज्ञानाचा वापर करून, आम्ही आमच्या संत्र्यांची प्रतवारी आणि वर्गीकरण करतो जेणेकरून ते गुणवत्ता आणि आकाराच्या सर्वोच्च मानकांची पूर्तता करतील.',
    image: getImage('service-sorting'),
  },
  {
    icon: <Citrus className="h-10 w-10 text-primary" />,
    title: 'संपूर्ण इकोसिस्टम',
    description: 'मातीच्या आरोग्यापासून ते बाजारापर्यंत, आम्ही आमच्या शेतकऱ्यांना प्रत्येक टप्प्यावर पाठिंबा देतो, ज्यामुळे एक समृद्ध कृषी इकोसिस्टम तयार होते.',
    image: getImage('service-ecosystem'),
  },
];

const values = [
  { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: 'समुदाय', description: 'शेतकऱ्यांचे एक मजबूत, सहाय्यक नेटवर्क तयार करणे.' },
  { icon: <Leaf className="h-8 w-8 text-primary" />, title: 'शाश्वतता', description: 'पर्यावरणास जागरूक शेती पद्धतींसाठी वचनबद्ध.' },
  { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'गुणवत्ता', description: 'आमच्या ग्राहकांना केवळ सर्वोत्तम उत्पादन देणे.' },
  { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: 'नावीन्य', description: 'उत्तम उत्पन्नासाठी नवीन तंत्रज्ञान आणि पद्धती स्वीकारणे.' },
];

export default function Home() {
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
          <p className="text-lg md:text-xl font-body">संत्र्यांच्या जगाचे अन्वेषण करा</p>
          <h1 className="text-4xl leading-tight tracking-tighter md:text-6xl lg:text-7xl font-bold text-shadow-lg max-w-2xl">
            राऊत शेतकरी उत्पादक कंपनी
          </h1>
          <Button asChild size="lg" className="mt-8">
            <Link href="/about">अधिक जाणून घ्या</Link>
          </Button>
        </div>
      </section>
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Teaser */}
        <section className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">आम्ही कोण आहोत</h2>
            <p className="font-body text-lg text-foreground/80">
              राऊत शेतकरी उत्पादक कंपनी ही भारतातील संत्र्यांच्या प्रदेशातील उत्साही शेतकऱ्यांची एक संघटना आहे. आमचं एकत्र येण्यामागचं कारण एकच आहे – आपल्या पिढीजातल्या ज्ञानाला आधुनिक कृषी विज्ञानासोबत एकत्र करून उत्कृष्ट पिकं उगवणे आणि आपल्या समुदायाचा विकास साधणे.
            </p>
            <p className="font-body text-foreground/70">
              आमचे सहकारी मॉडेल हे सुनिश्चित करते की प्रत्येक शेतकऱ्याला सामायिक संसाधने, तंत्रज्ञान आणि बाजारपेठेचा फायदा मिळतो, ज्यामुळे सर्वांसाठी एक शाश्वत आणि समृद्ध भविष्य निर्माण होते.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/about">आमची कहाणी वाचा <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Company at a Glance */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">कंपनी एका दृष्टिक्षेपात</h2>
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
              <h3 className="text-2xl font-bold">वैयक्तिक सल्ला</h3>
              <p className="font-body text-foreground/80">
                आमचे अनुभवी कृषीशास्त्रज्ञ मातीची रचना, पाण्याची उपलब्धता, पिकाची अवस्था आणि बाजाराच्या गरजांवर आधारित सानुकूलित मार्गदर्शन देतात. हा वैयक्तिक दृष्टिकोन शेतकऱ्यांना चांगला उत्पादन आणि संतुलित प्रतवारी मिळविण्यात मदत करतो.
              </p>
              <p className="font-body text-foreground/70">
                आमचे तज्ञ केवळ सल्ल्याच्या पलीकडे जाऊन शेतात यशोगाथा निर्माण करण्यास मदत करतात. मातीपासून बाजारापर्यंत, त्यांचे ज्ञान आव्हानांना संधींमध्ये बदलते, ज्यामुळे केवळ उत्तम पिकेच नव्हे तर सातत्य, गुणवत्ता आणि उत्कृष्टतेची हमी मिळते.
              </p>
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">आमच्या सेवा</h2>
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
                    <CardTitle className="text-2xl text-primary">आमचे ध्येय</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    राऊत शेतकरी उत्पादक कंपनीचे ध्येय लहान आणि अत्यल्प भूधारक शेतकऱ्यांसाठी एक मजबूत व्यासपीठ तयार करणे आहे, ज्यामुळे त्यांना आर्थिक स्वातंत्र्य आणि सामाजिक उन्नतीसह एक सन्माननीय जीवन जगण्यास मदत होईल. आम्ही शेतकऱ्यांचे संघटन करून, त्यांच्या प्रक्रियांचे मानकीकरण करून, उत्पादन वाढवून आणि शाश्वततेला प्रोत्साहन देऊन त्यांचे जीवनमान सुधारण्यासाठी वचनबद्ध आहोत. आमचे ध्येय समाजातील दुर्बळ घटकांना सक्षम करणे आणि त्यांच्या सर्वांगीण आर्थिक आणि सामाजिक विकासास पाठिंबा देणे आहे.
                </CardContent>
            </Card>
             <Card className="bg-secondary/60">
                <CardHeader className="flex-row items-center gap-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">आमची दृष्टी</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-body text-foreground/80">
                    राऊत शेतकरी उत्पादक कंपनीची दृष्टी मजबूत आर्थिक आणि सामाजिक विकासाद्वारे शेतकरी आणि उत्पादकांसाठी उत्तम वाढीस पाठिंबा देणे आहे. आम्ही कृषी समुदायाच्या कल्याणावर लक्ष केंद्रित करून समाजात योगदान देण्याचे ध्येय ठेवतो. आमच्या वचनबद्धतेमध्ये शाश्वत पद्धतींना प्रोत्साहन देणे, नवनवीनतेला प्रोत्साहन देणे आणि सतत प्रगतीसाठी संधी निर्माण करणे यांचा समावेश आहे. आम्ही एका सहयोगी वाढीच्या भविष्याची कल्पना करतो जिथे सर्व भागधारक सामायिक समृद्धी आणि दीर्घकालीन शाश्वततेसाठी एकत्र काम करतील.
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
                    <h2 className="text-3xl md:text-4xl font-bold">उद्दिष्ट्ये</h2>
                    <p className="font-body text-lg">
                        आमचे प्राथमिक उद्दिष्ट शेतकऱ्यांना प्रभावी, सहयोगी गटांमध्ये संघटित करून आमच्या उत्पादनासाठी अधिक मूल्य निर्माण करणे आहे. हा दृष्टिकोन केवळ आमच्या संत्र्यांची गुणवत्ता सुधारत नाही तर उत्तम उत्पादन पद्धती, सामूहिक विपणन आणि मूल्यवर्धनाद्वारे शेतकऱ्यांचे उत्पन्न देखील वाढवतो. आम्ही एक मजबूत, शाश्वत कृषी परिसंस्था तयार करण्यासाठी वचनबद्ध आहोत आणि तुम्हाला या वाढ आणि समृद्धीच्या प्रवासात सामील होण्यासाठी आमंत्रित करतो.
                    </p>
                </div>
            </div>
        </section>


        {/* Core Values */}
        <section>
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">आमची मुख्य मूल्ये</h2>
            <p className="mt-2 max-w-2xl mx-auto font-body text-lg text-foreground/70">
              ती तत्त्वे जी आमच्या प्रत्येक निर्णयाला मार्गदर्शन करतात.
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
