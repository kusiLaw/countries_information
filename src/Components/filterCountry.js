const filterCountry = (obj, key) => (obj.filter(
  (el) => (el.continents === key),
));

export default filterCountry;
