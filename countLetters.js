const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }

};

const countLetters = function(string){

  const result = {};

  for (letter of string){
    if (letter !== " "){
      if(result[letter]){
        result[letter] += 1;
      }
      else {
        result[letter] = 1;
      }
    }
  }

  return result;

}

console.log(countLetters("I love lemons and lollipops."));
console.log(assertEqual(countLetters("I love lemons and lollipops.")["l"], 5));
console.log(assertEqual(countLetters("I love lemons and lollipops.")["l"], 2));
