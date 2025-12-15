export function postTaxEquity({ invested, current, days }) {
  const gain = current - invested;
  if (days < 365) return gain * 0.85;
  return gain - Math.max(0, gain - 100000) * 0.1;
}

