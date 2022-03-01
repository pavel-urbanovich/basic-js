const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';
  
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  
  const result = [];
  const array = [...arr]

  for(let i = 0; i < array.length; i++) {

    if (array[i] === discardPrev && i === 0) {
      continue
    }

    if (array[i] === doublePrev && i === 0) {
      continue;
      
    }
    if ((arr[i] === doubleNext && i === arr.length - 1) || (arr[i] === discardNext && i === arr.length - 1)) {
     return result;
    }

    if (array[i] === doubleNext) {
      array[i] = array[i + 1]
    }

    if (array[i] === doublePrev) {
      array[i] = array[i - 1]
    }

    if (array[i] === discardPrev && i !== 0) {
      result.pop();
      continue;
    }

    if (array[i] === discardNext) {
      i = i + 1;
     continue;
    }

    if(array[i] === discardNext && array[i + 2] === discardPrev) {
      array[i] = array[i + 2]
    }


   result.push(array[i])
    }
    
    return result;
}

module.exports = {
  transform
};
