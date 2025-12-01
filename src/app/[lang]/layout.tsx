import type { Metadata } from 'next';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { Locale } from '@/lib/i18n/i18n-config';
import { DictionaryProvider } from '@/context/DictionaryProvider';

export const metadata: Metadata = {
  title: 'राऊत शेतकरी उत्पादक कंपनी',
  description: 'राऊत शेतकरी उत्पादक कंपनीची वेबसाइट',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍊</text></svg>',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="flex min-h-screen flex-col font-body antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer lang={params.lang} />
      </div>
      <Toaster />
    </DictionaryProvider>
  );
}
