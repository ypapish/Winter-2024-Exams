// Copy all listed keys from dictionary

'use strict';

const copySelectedKeys = (object, ...keys) => {
  const copiedResult = {};
  const allKeys = Object.keys(object);
  for (const key of allKeys) {
    if (keys.includes(key)) {
      copiedResult[key] = object[key];
    }
  }
  return copiedResult;
};

module.exports = copySelectedKeys;