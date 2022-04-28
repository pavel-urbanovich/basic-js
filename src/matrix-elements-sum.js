const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let sum = matrix.reduce((sum, current) => sum + current.reduce((a,b) => a+b), 0);
  let arr = []
  for (let i = 1; i < matrix.length - 1; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arr.push(matrix[i + 1][j])
      }
    }  
  } 
  sumBelowZero = arr.reduce((a,b) => a + b, 0)
  console.log(sumBelowZero)
  return sum -  sumBelowZero
}


module.exports = {
  getMatrixElementsSum
};
