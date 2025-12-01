import { Citrus, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

const footerNavs = [
  { href: '/', name: 'मुख्यपृष्ठ' },
  { href: '/about', name: 'आमच्याबद्दल' },
  { href: '/services', name: 'सेवा' },
  { href: '/projects', name: 'प्रकल्प' },
  { href: '/contact', name: 'संपर्क' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#' },
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-foreground/70">
              आमच्या शेतातून तुमच्या कुटुंबापर्यंत उत्कृष्टता वाढवणे, गुणवत्ता आणि टिकाऊपणा सुनिश्चित करणे.
            </p>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="text-lg font-headline tracking-wider text-foreground">जलद दुवे</h3>
            <ul className="mt-4 space-y-2">
              {footerNavs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-foreground/70 hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mx-auto">
             <h3 className="text-lg font-headline tracking-wider text-foreground">आमच्याशी संपर्क साधा</h3>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
                <p>ईमेल: rautwanojafpc@gmail.com</p>
                <p>फोन: +91 9586351548</p>
                <p>पत्ता: वनोजा - ४४४४०२, ता. मंगरूळपीर, जिल्हा. वाशिम, राज्य. महाराष्ट्र.</p>
            </div>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-foreground/70 hover:text-primary">
                  <span className="sr-only">सोशल मीडिया लिंक</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t py-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} राऊत शेतकरी उत्पादक कंपनी. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
}
