const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return `Assertion Failed: ${actual} !== ${expected}`;
  }

};


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

}

const eqObjects = function(object1, object2){

  let objectOneKeys = Object.keys(object1); //Keys become an array
  let objectTwoKeys = Object.keys(object2);
  
  if (objectOneKeys.length !== objectTwoKeys.length){ //If objects are a different length, eliminate them right away
    return false
  }

  for (let key in object1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      if (!eqArrays(object1[key], object2[key])){
        return false;
      } else if (object1[key] !== object2[key]){
        return false;
      }
    }

    return true;
  }

}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};