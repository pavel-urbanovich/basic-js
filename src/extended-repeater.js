const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  let res = '';
  let subString = '';

  if (options.repeatTimes === undefined) {
    return str + options.addition;
  }

  for(let i = 0; i < options.repeatTimes; i++) {
    if (!options.separator) {
      options.separator = '+';
      
    }
    
    if (!options.addition) {
      options.addition = '';
    }
    if (options.additionRepeatTimes === undefined) {
       res += `${str}${subString}${options.separator}`
    }
   
    
    for(let j = 0; j < options.additionRepeatTimes; j++) {
        if (options.additionRepeatTimes === undefined) {
          subString = options.adition;
          break;
        }

        if (!options.additionSeparator) {
          options.additionSeparator = ''
        }

        subString = `${options.addition}${options.additionSeparator}`;
        
      if (options.additionRepeatTimes !== undefined) {
          res += `${str}${subString}${options.separator}`
        }
        
      
      
    }
  
  }
  return res.slice(0, -options.separator.length);
}

module.exports = {
  repeater
};
