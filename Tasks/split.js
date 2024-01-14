// Split an array into two parts

'use strict';

let splitArray = (index, array) => {
  beginOfArray = array.slice(0, index);
  const arrayLenght = array.length;
  endingOfArray = array.slice(index, arrayLenght);
  return [beginOfArray, endingOfArray];
};

module.exports = splitArray;
