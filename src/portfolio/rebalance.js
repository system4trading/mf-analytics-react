export const rebalance = (actual, target, band=5) =>
  actual.map(a => ({
    ...a,
    alert: Math.abs(a.weight - target[a.asset]) > band
  }));

