// Filter array by type name

'use strict';

const filterByType = (T, t) => {
  const indicesToRemove = [];
  for (C of T) {
    x = T.indexOf(C);
    if (typeof T[x] !== t) {
      indicesToRemove.unshift(x);
    }
  }
  for (x of indicesToRemove) T.splice(x, 1);
  return T;
};

module.exports = filterByType;
