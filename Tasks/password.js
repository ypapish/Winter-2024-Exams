// Generate random password

'use strict';

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generatePassword = (alphabet, length) => {
  const maxLenght = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    key += alphabet[random(0, maxLenght)];
  }
  return key;
};

module.exports = generatePassword;