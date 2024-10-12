import Head from 'next/head';
import { useRouter } from 'next/router';
import TaxCalculatorForm from '@/components/TaxCalculatorForm';
import LanguageSelector from '@/components/LanguageSelector';
import { translations, Language } from '@/utils/language';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale as Language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-light text-gray-900">{t.title}</h1>
          <LanguageSelector />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <TaxCalculatorForm translations={t} />
        </div>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {t.footer}</p>
      </footer>
    </div>
  );
}
