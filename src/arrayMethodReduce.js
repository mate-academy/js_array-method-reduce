'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    const hasInitialValue = arguments.length > 1;

    if (this.length === 0) {
      if (hasInitialValue) {
        return initialValue;
      }

      return undefined;
    }

    const startIndex = hasInitialValue ? 0 : 1;

    accumulator = hasInitialValue ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
