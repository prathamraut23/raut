'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const locales = [
  { value: 'mr', label: 'मराठी' },
  { value: 'en', label: 'English' },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return;
    const newPath = pathname.replace(/^\/(en|mr)/, `/${newLocale}`);
    router.push(newPath);
  };

  const currentLocale = pathname.split('/')[1] || 'mr';

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-auto border-none bg-transparent shadow-none focus:ring-0 focus:ring-offset-0">
        <div className='flex items-center gap-2'>
            <Globe className="h-5 w-5 text-foreground/70" />
            <SelectValue placeholder="Language" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale.value} value={locale.value}>
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
