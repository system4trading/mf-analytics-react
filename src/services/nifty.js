export const fetchNifty = () =>
  fetch("https://raw.githubusercontent.com/YOURNAME/mf-data-cache/main/nifty/nifty50.json")
    .then(r => r.json());

