import { Citrus, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';

const footerNavs = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About Us' },
  { href: '/services', name: 'Services' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
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
              Cultivating excellence from our farms to your family, ensuring quality and sustainability.
            </p>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="text-lg font-headline tracking-wider text-foreground">Quick Links</h3>
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
             <h3 className="text-lg font-headline tracking-wider text-foreground">Connect With Us</h3>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
                <p>Email: rautwanojafpc@gmail.com</p>
                <p>Phone: +91 9586351548</p>
                <p>Address: wanoja,dist washim, state maharashra</p>
            </div>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-foreground/70 hover:text-primary">
                  <span className="sr-only">Social media link</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t py-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Raut Farmer Producer Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
