// Generate random integer value in given range

'use strict';

const getRandomInt = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

module.exports = getRandomInt;