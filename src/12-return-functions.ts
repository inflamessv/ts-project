(()=>{

  const calcTotal = (prices : number[]): string =>{
    let total = 0;
    prices.forEach(item => {
      total += item;
    });
    return total.toString();
  };


  const printTotal = (prices : number[]): void=>{
    let total = calcTotal(prices);
    console.log(`total : ${total}`);
  }

  printTotal([1,2,3,4,5,6,7]);

})();
