// Filter array by type name

'use strict';

const filterByType = (array, typeName) => {
  const indicesToRemove = [];

  for (const [index, item] of array.entries()) {
    if (typeof item !== typeName) {
      indicesToRemove.unshift(index);
    }
  }
  
  for (const index of indicesToRemove) {
    array.splice(index, 1);
  }
  return array;
};

module.exports = filterByType;
