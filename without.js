const without = function(sourceArray, removedArray) {

  let result = [];
  
  for (let i = 0; i < sourceArray.length; i ++) {
    let remove = false;

    for (let j = 0; j < removedArray.length; j++) {
      if (sourceArray[i] === removedArray[j]) {
         remove = true;
      }
    }
    if (remove === false) {
      result.push(sourceArray[i]);
    }
  }

  return result;

}