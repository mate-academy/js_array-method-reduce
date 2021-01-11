'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(
    callback,
    initialValue = typeof this[0] === 'number' ? 0 : '') {
    let result = initialValue;

    for (let i = 0; i < this.length; i++) {
      result += callback(initialValue, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
