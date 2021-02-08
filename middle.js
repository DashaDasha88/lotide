const middle = function(array){

  middleElement = [];
  
  for(let i = 0; i < array.length; i++){
    if (array.length <= 2){
      return [];
    } else if (array.length % 2 === 0){
      return [array[Math.ceil(array.length / 2)], array[Math.ceil(array.length / 2) - 1]];
    } else {
      return [array[Math.floor(array.length / 2)]];
    }
  }

  return middleElement;
}

module.exports = middle;
