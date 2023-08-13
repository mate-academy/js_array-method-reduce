'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = '';

    if (this.length === 0) {
      return initialValue;
    }

    let startIndex = 1;
    let accumulator = this[0];

    if (arguments.length > 1) {
      startIndex = 0;
      accumulator = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      result = callback(accumulator, this[i], i, this);
      accumulator = result;
    }

    return result;
  };
}

module.exports = applyCustomReduce;
