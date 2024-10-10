import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import TaxCalculatorForm from '@/components/TaxCalculatorForm';
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

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-5xl font-light text-center mb-12 text-gray-900">{t.title}</h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <TaxCalculatorForm translations={t} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/" locale="en" className="mx-2">English</Link>
          <Link href="/" locale="ja" className="mx-2">日本語</Link>
          <Link href="/" locale="zh" className="mx-2">中文</Link>
        </div>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} {t.footer}</p>
      </footer>
    </div>
  );
}
