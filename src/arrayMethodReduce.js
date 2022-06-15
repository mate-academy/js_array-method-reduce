'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (callback === undefined) {
      throw new TypeError('undefined is not a function');
    }

    if (this.length === 0 && arguments.length !== 2) {
      throw new TypeError('reduce of empty array with no initial value');
    }

    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length === 1) {
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
