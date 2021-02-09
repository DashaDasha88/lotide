const eqArrays = function(array1, array2) {
  let result = true;

  if (array1.length !== array2.length) {
    result = false;
  }

  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  }

  return result;

};


const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2)) {
    console.log("Assertion Passed: arrays are equal!");
  } else {
    console.log("Assertion Failed: arrays are not equal!");
  }

};


const takeUntil = function(array, callback) {
  let newArray = []

  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element)
    } else {
      break;
    }
  }

  return newArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
