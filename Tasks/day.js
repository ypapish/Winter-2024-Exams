// Get day number

'use strict';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (str) => {
  for (const [num, dayOfWeek] of daysOfWeek.entries()) {
    if (str.startsWith(daysOfWeek[num].toLowerCase())) {
      return num + 1;
    }
  }
  return - 1;
};

module.exports = getDayNumber;