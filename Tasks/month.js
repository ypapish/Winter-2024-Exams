// Get month number

'use strict';

monthNames = [
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

getMonthNumber = (month) => {
  totalMonths = monthNames.length;
  for (let index = 0; index < totalMonths; index++) {
    if (s.toLowerCase().startsWith(monthNames[index])) return index + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
