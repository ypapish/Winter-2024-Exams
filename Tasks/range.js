// Generate int array from given range

'use strict';

generateRange = (from, to) => {
  if (to < from) {
    return [];
  }

    const rangeArray = new Array(to - from + 1);
  return rangeArray;
};

module.exports = generateRange;
