'use strict';

/**
 * Implement method Reduce
 */
// - Here is a base realisation
// |-- of .reduce() JS method ;)
function applyCustomReduce() {
  [].__proto__.reduce2 = function(
    callback = ((a, b) => a + b),
    initialValue,
  ) {
    let result = initialValue;

    if (arguments.length < 2
      && typeof this[0] === 'number') {
      result = 0;
    } else if (arguments.length < 2
      && typeof this[0] === 'string') {
      result = '';
    }

    for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
