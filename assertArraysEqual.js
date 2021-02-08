const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed!`);
    return `✅✅✅ Assertion Passed!`;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed!`);
    return `🛑🛑🛑 Assertion Failed!`;
  }

};

module.exports = assertArraysEqual;
