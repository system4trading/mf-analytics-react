export const fetchNifty = () =>
  fetch("https://raw.githubusercontent.com/system4trading/mf-data-cache/blob/main/nifty/nifty50.json")
    .then(r => r.json());

