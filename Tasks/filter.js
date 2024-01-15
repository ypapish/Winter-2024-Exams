// Filter array by type name

'use strict';

const filterByType = (T, t) => {
  const indicesToRemove = [];
  for (const [index, item] of array.entries()) {
    if (typeof item !== typeName) {
      indicesToRemove.unshift(index);
    }
  }
  for (x of indicesToRemove) T.splice(x, 1);
  return T;
};

module.exports = filterByType;
