'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitialValue = (arguments.length === 2);
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue
      ? initialValue
      : this[0];

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
