export const fetchCategoryAvg = () =>
  fetch("https://raw.githubusercontent.com/system4trading/mf-data-cache/main/category_avg.json")
    .then(r => r.json());

