const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  let res = ''
  for (let i = 0; i < email.length; i++) {
    if (email[i] ==='@' && email[i + 1] !== '.') {
      res = email.slice(i + 1);
    }
    if (email[i] ==='@' && email[i + 1] === '.') {
    res = email.slice(i + 2);
    }
} return res
}

module.exports = {
  getEmailDomain
};
