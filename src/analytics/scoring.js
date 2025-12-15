export function mfScore(m) {
  return (
    m.alpha * 0.25 +
    m.sharpe * 0.2 -
    m.drawdown * 0.15 -
    m.expense * 0.15 +
    m.consistency * 0.25
  );
}

