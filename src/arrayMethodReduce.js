'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue === undefined ? this[0] : initialValue;
    let index = initialValue === undefined ? 1 : 0;

    while (index < this.length) {
      result = callback(result, this[index], index, this);
      index++;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
