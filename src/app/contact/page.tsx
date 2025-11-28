
import Image from 'next/image';
import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './contact-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contact Us | Raut Orange Ecosystem',
  description: 'Get in touch with Raut Farmer Producer Company. Find our contact details, location, or send us a message through our contact form.',
};

const contactImage = PlaceHolderImages.find(img => img.id === 'contact-hero');

export default function ContactPage() {
  return (
    <div>
        <section 
          className="relative bg-secondary py-20 text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://preview.redd.it/oranges-in-tropical-regions-have-green-skin-instead-of-v0-d2v4vr0myty81.jpg?width=640&crop=smart&auto=webp&s=ecfa11be7d5aaab0fc6d64dc226bcee28ec8d752')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl tracking-tighter md:text-6xl font-bold">Get In Touch</h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg font-body text-white/90">
                  We're here to answer your questions and explore opportunities. Let's connect.
              </p>
          </div>
      </section>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
              <p className="mt-2 text-foreground/70 font-body">Fill out the form, or reach out to us using the details below.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">Phone</h3>
                  <p className="text-foreground/70 font-body">+91 9586351548</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">Email</h3>
                  <p className="text-foreground/70 font-body">rautwanojafpc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-headline">Address</h3>
                  <p className="text-foreground/70 font-body">Wanoja Tq - Mangrulpir <br/> Dist - Washim <br/> State - Maharashtra</p>
                </div>
              </div>
            </div>
             <div className="relative h-80 w-full rounded-lg shadow-lg overflow-hidden mt-8">
              {contactImage && (
                <Image
                  src={contactImage.imageUrl}
                  alt={contactImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={contactImage.imageHint}
                />
              )}
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
