import { mean, stdev } from "./returns";

export function rollingSharpe(returns, window = 252) {
  const out = [];
  for (let i = window; i < returns.length; i++) {
    const r = returns.slice(i - window, i);
    out.push(mean(r) / stdev(r) * Math.sqrt(252));
  }
  return out;
}

