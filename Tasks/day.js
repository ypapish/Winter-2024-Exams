// Get day number

'use strict';

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

getDayNumber = (s) => {
  let i;
  for (i = 0; i < daysOfWeek.length; i++) {
    if (s.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;