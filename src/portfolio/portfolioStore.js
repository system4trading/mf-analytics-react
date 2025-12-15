import { create } from "zustand";

export const usePortfolio = create(set => ({
  holdings: [],
  addHolding: h => set(s => ({ holdings: [...s.holdings, h] }))
}));

