'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && arguments.length === 0) {
      throw new TypeError('Error');
    }

    const hasInitialValue = arguments.length > 1;
    let accumulator = hasInitialValue ? initialValue : this[0];

    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
