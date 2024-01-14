// Get day number

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (str) => {
  for (let num = 0; num < daysOfWeek.length; num++) {
    if (str.startsWith(daysOfWeek[num].toLowerCase())) {
      return num + 1;
    }
  }
  return - 1;
};

module.exports = getDayNumber;