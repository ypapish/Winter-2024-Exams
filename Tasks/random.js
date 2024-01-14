// Generate random integer value in given range

'use strict';

getRandomInt = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
    return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = getRandomInt;
