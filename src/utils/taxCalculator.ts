export function calculateTax(annualSalary: number): number {
  let tax = 0;
  if (annualSalary <= 50000) {
    tax = annualSalary * 0.1;
  } else if (annualSalary <= 100000) {
    tax = 5000 + (annualSalary - 50000) * 0.2;
  } else {
    tax = 15000 + (annualSalary - 100000) * 0.3;
  }
  return tax;
}
