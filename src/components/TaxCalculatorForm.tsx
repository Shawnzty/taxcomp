import React, { useState } from 'react';
import { calculateTax } from '@/utils/taxCalculator';

const TaxCalculatorForm: React.FC = () => {
  const [income, setIncome] = useState<string>('');
  const [tax, setTax] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedTax = calculateTax(parseFloat(income));
    setTax(calculatedTax);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="income">
            Annual Income
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="income"
            type="number"
            placeholder="Enter your annual income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Calculate Tax
          </button>
        </div>
      </form>
      {tax !== null && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
          <p className="font-bold">Estimated Tax:</p>
          <p>${tax.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculatorForm;
