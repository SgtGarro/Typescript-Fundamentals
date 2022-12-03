(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((total, sum) => (total += sum), 0);
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total is ${rta}`);
  };

  printTotal([1, 2, 1, 1, 1]);
})();
