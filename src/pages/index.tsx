import Head from 'next/head';
import TaxCalculatorForm from '@/components/TaxCalculatorForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Tax Calculator</title>
        <meta name="description" content="Simple tax calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-5xl font-light text-center mb-12 text-gray-900">Tax Calculator</h1>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <TaxCalculatorForm />
        </div>
      </main>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tax Calculator App</p>
      </footer>
    </div>
  );
}
