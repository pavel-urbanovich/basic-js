const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let number = n.toString();
  let index;
  let res;
  for(let i = 0; i < number.length; i++) {
    if (+number[i] > +number [i + 1]) {
      continue;
    }  if (+number[i] < +number [i + 1]) {
      index = i;
      break
    } else {
      index = number.length - 1;
    }
  }
  return Number(number.replace(number[index], ''))
}

module.exports = {
  deleteDigit
};
