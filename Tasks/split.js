// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const beginOfArray = array.slice(0, index);
  const arrayLenght = array.length;
  const endingOfArray = array.slice(index, arrayLenght);
  return [beginOfArray, endingOfArray];
};

module.exports = splitArray;
