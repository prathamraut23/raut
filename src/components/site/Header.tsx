'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useDictionary } from '@/context/DictionaryProvider';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];
  const fullHref = `/${lang}${href}`;
  const isActive = pathname === fullHref || (href === '/' && pathname === `/${lang}`);


  return (
    <Link
      href={fullHref}
      className={cn(
        'px-3 py-2 rounded-md text-sm font-medium transition-colors',
        isActive
          ? 'text-primary'
          : 'text-foreground/70 hover:text-primary'
      )}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dictionary = useDictionary();
  const lang = usePathname().split('/')[1] || 'mr';

  const navLinks = [
    { href: '/', label: dictionary.header.home },
    { href: '/about', label: dictionary.header.about },
    { href: '/services', label: dictionary.header.services },
    { href: '/projects', label: dictionary.header.projects },
    { href: '/contact', label: dictionary.header.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Logo />
          <LanguageSwitcher />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">मेनू उघडा</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs bg-background">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6 text-primary" />
                    <span className="sr-only">मेनू बंद करा</span>
                  </Button>
                </div>
                <nav className="mt-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/${lang}${link.href}`}
                      className="text-lg text-foreground/80 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
