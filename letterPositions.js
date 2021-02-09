/*const eqArrays = function(array1, array2) {
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

};*/

const letterPositions = function(sentence) {
  const result = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " "){
      if (!result[sentence[i]]){
        result[sentence[i]] = [i];
      } else {
        result[sentence[i]].push(i);
      }
    }
  }

  return result;
};

console.log(letterPositions("I love lemons and lollipops"));
console.log(assertArraysEqual(letterPositions("I love lemons and lollipops").v, [4]));
