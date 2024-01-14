// Generate random password

'use strict';

const generatePassword = (alphabet, length) => {
  const maxLenght = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxLenght);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;