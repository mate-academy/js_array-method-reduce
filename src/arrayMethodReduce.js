'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && arguments.length < 2) {
      throw new TypeError(`Reduce of empty array with no initial value!`);
    }

    let accumulator = initialValue;
    let currentValue = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      currentValue = 1;
    }

    for (let i = currentValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
