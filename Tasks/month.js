// Get month number

'use strict';

const monthNames = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthNumber = (month) => {
  const monthLower = month.toLowerCase();
  const totalMonths = monthNames.length;
  for (let index = 0; index < totalMonths; index++) {
    if (monthLower.indexOf(monthNames[index]) === 0) {
      return index + 1;
    }
  }
  return - 1;
};

module.exports = getMonthNumber;
