'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let startIndex;

    if (arguments.length > 1) {
      if (initialValue === undefined && this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = initialValue;
      startIndex = 0;
    } else {
      if (this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
