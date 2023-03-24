export const formatNumberToCurrency = (price: number) => {
  return price
    .toFixed(2)
    .toString()
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
