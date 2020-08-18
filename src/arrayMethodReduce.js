'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let startIndex = 0;

    if (!initialValue) {
      typeof callback(accumulator, this[0], 0, this) === 'number'
        ? accumulator = 0
        : accumulator = '';
    } else {
      accumulator = initialValue;
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
