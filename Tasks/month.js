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
  const totalMonths = monthNames.length;
  for (let index = 0; index < totalMonths; index++) {
    if (s.toLowerCase().startsWith(monthNames[index])) return index + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
