import React, { useState, useEffect } from 'react';
import { TranslationKey, translations } from '@/utils/language';
import { calculateTax } from '@/utils/taxCalculator';


type FormTranslations = Pick<typeof translations.en, TranslationKey>;

interface TaxCalculatorFormProps {
  translations: FormTranslations;
}

const TaxCalculatorForm: React.FC<TaxCalculatorFormProps> = ({ translations }) => {
  const [annualSalary, setAnnualSalary] = useState<number>(0);
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);

  useEffect(() => {
    if (annualSalary > 0) {
      const tax = calculateTax(annualSalary);
      setTaxAmount(tax);
    } else if (monthlySalary > 0 || bonus > 0) {
      const calculatedAnnualSalary = (monthlySalary * 12) + bonus;
      setAnnualSalary(calculatedAnnualSalary);
      const tax = calculateTax(calculatedAnnualSalary);
      setTaxAmount(tax);
    } else {
      setTaxAmount(0);
    }
  }, [annualSalary, monthlySalary, bonus]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setter(value);
    if (setter !== setAnnualSalary) {
      setAnnualSalary(0); // Reset annual salary when monthly or bonus is changed
    }
  };

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="annualSalary" className="block text-sm font-medium text-gray-700">{translations.annualSalary}</label>
        <input
          type="number"
          id="annualSalary"
          value={annualSalary || ''}
          onChange={handleInputChange(setAnnualSalary)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="monthlySalary" className="block text-sm font-medium text-gray-700">{translations.monthlySalary}</label>
        <input
          type="number"
          id="monthlySalary"
          value={monthlySalary || ''}
          onChange={handleInputChange(setMonthlySalary)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="bonus" className="block text-sm font-medium text-gray-700">{translations.bonus}</label>
        <input
          type="number"
          id="bonus"
          value={bonus || ''}
          onChange={handleInputChange(setBonus)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="taxAmount" className="block text-sm font-medium text-gray-700">{translations.result}</label>
        <input
          type="number"
          id="taxAmount"
          value={taxAmount.toFixed(2)}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
        />
      </div>
    </form>
  );
};

export default TaxCalculatorForm;
