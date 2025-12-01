import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './Logo';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/lib/i18n/i18n-config';

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#' },
  { icon: <Instagram className="h-5 w-5" />, href: '#' },
  { icon: <Twitter className="h-5 w-5" />, href: '#' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#' },
]

export default async function Footer({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  const footerNavs = [
    { href: `/${lang}/`, name: dictionary.footer.home },
    { href: `/${lang}/about`, name: dictionary.footer.about },
    { href: `/${lang}/services`, name: dictionary.footer.services },
    { href: `/${lang}/projects`, name: dictionary.footer.projects },
    { href: `/${lang}/contact`, name: dictionary.footer.contact },
  ];

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-foreground/70">
              {dictionary.footer.tagline}
            </p>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="text-lg font-headline tracking-wider text-foreground">{dictionary.footer.quickLinks}</h3>
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
             <h3 className="text-lg font-headline tracking-wider text-foreground">{dictionary.footer.contactUs}</h3>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
                <p>{dictionary.footer.email}: rautwanojafpc@gmail.com</p>
                <p>{dictionary.footer.phone}: +91 9586351548</p>
                <p>{dictionary.footer.address}: {dictionary.footer.addressLine}</p>
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
          <p>&copy; {new Date().getFullYear()} {dictionary.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
