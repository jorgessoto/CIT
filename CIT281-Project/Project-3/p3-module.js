/*
    CIT 281 Project 3
    p3-module.js
    Name: Jorge Soto
*/

const coinsVal = [1, 5, 10, 25, 50, 100];
vaildDenomination = (coin) => {
  let vaild = coinsVal.indexOf(coin);
  return vaild != -1 ? true : false; // one line if statement
};

function valueFromCoinObject(obj) {
  const { denom = 0, count = 0 } = obj;
  return denom * count;
}

valueFromArray = (arr) => {
  return arr.reduce((total, currentValue) => total + valueFromCoinObject(currentValue), 0);
};

function coinCount(...coinage) {
  return valueFromArray(coinage);
}
module.exports = { coinCount };

console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [
  { denom: 25, count: 2 },
  { denom: 1, count: 7 },
];
console.log("...[{}]", coinCount(...coins));
