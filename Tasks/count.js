// Sum all number values in dict

'use strict';

const sumObjectNumbers = (obj) => {
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
};

module.exports = sumObjectNumbers;