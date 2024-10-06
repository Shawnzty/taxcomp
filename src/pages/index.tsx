import Head from 'next/head';
import TaxCalculatorForm from '@/components/TaxCalculatorForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Tax Calculator</title>
        <meta name="description" content="Simple tax calculator app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Tax Calculator</h1>
        <TaxCalculatorForm />
      </main>

      <footer className="text-center mt-8">
        <p>&copy; 2023 Tax Calculator App</p>
      </footer>
    </div>
  );
}
