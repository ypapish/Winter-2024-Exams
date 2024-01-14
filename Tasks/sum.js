// Sum all numbers from an array

'use strict';

const allNumbersSum = (numbers) => {
  let resultOfNumbersSum = 0;
  for (const num of numbers) {
    if (typeof num === 'number') {
      resultOfNumbersSum += num;
    }
  }
  return resultOfNumbersSum;
};

module.exports = allNumbersSum;
