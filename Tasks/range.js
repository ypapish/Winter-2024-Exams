// Generate int array from given range

'use strict';

const generateRange = (from, to) => {
  if (to < from) {
    return [];
  }

    const rangeArray = Array.from(
      { length: to - from + 1 },
      (_, index) => from + index
    );
    return rangeArray;
};

module.exports = generateRange;
