const BASE = "https://raw.githubusercontent.com/system4trading/mf-data-cache/main/amfi/";

export const fetchNAV = code =>
  fetch(`${BASE}nav_${code}.json`).then(r => r.json());

