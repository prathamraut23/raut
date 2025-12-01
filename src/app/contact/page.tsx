
import Image from 'next/image';
import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './contact-form';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Raut Orange Ecosystem',
  description: 'Get in touch with Raut Farmer Producer Company. Find our contact details, location, or send us a message through our contact form.',
};

const mapImageUrl = "https://www.sammyfans.com/wp-content/uploads/2022/07/Use-Google-Map-Offline.png";
const mapLocationUrl = "https://www.google.com/maps/place/Wanjola,+Maharashtra+444402/@20.4066517,77.2225785,16z/data=!3m1!4b1!4m6!3m5!1s0x3bd127c78c4078f9:0x406413cb58e0eece!8m2!3d20.4070215!4d77.2275823!16s%2Fg%2F12hq_q0ss?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";


export default function ContactPage() {
  return (
    <div>
        <section 
          className="relative bg-secondary py-20 text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://preview.redd.it/oranges-in-tropical-regions-have-green-skin-instead-of-v0-d2v4vr0myty81.jpg?width=640&crop=smart&auto=webp&s=ecfa11be7d5aaab0fc6d64dc226bcee28ec8d752')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">संपर्क साधा</h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-white/90">
                  आम्ही तुमच्या प्रश्नांची उत्तरे देण्यासाठी आणि संधी शोधण्यासाठी येथे आहोत. चला कनेक्ट होऊया.
              </p>
          </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary">संपर्क माहिती</h2>
              <p className="mt-2 text-foreground/70 font-body">फॉर्म भरा, किंवा खाली दिलेल्या तपशिलांचा वापर करून आमच्याशी संपर्क साधा.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">फोन</h3>
                  <p className="text-foreground/70 font-body">+91 9586351548</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">ईमेल</h3>
                  <p className="text-foreground/70 font-body">rautwanojafpc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">पत्ता</h3>
                  <p className="text-foreground/70 font-body">वनोजा - ४४४४०२, ता. मंगरूळपीर, <br/> जिल्हा. वाशिम, राज्य. महाराष्ट्र.</p>
                </div>
              </div>
            </div>
             <div className="relative h-80 w-full rounded-lg shadow-lg overflow-hidden mt-8">
                <Link href={mapLocationUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps वर स्थान पहा">
                    <Image
                    src={mapImageUrl}
                    alt="Map showing the location of Raut Farmer Producer Company"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint="road map"
                    />
                </Link>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
