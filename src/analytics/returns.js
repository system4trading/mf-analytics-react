export const logReturns = prices =>
  prices.slice(1).map((p, i) => Math.log(p / prices[i]));

export const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

export const stdev = arr =>
  Math.sqrt(mean(arr.map(x => (x - mean(arr)) ** 2)));

