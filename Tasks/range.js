// Generate int array from given range

'use strict';

generateRange = (from, to) => {
  let [from, to] = Range;
  if (to < from) {
    return [];
  }
    Range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      Range[i - from] = i;
    } 
  return Range;
};

module.exports = generateRange;
