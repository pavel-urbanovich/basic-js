const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    // throw new NotImplementedError('Not implemented');
    if (!Array.isArray(array)) {
      return 0;
    }  
    let res = 0;
  
    for (let elem of array) {
    res = Math.max(res, this.calculateDepth(elem));
    }
  return 1 + res
  }
}

module.exports = {
  DepthCalculator
};
