export function calculateTax(income: number): number {
  // This is a simplified tax calculation
  if (income <= 50000) {
    return income * 0.1;
  } else if (income <= 100000) {
    return 5000 + (income - 50000) * 0.2;
  } else {
    return 15000 + (income - 100000) * 0.3;
  }
}
