'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(accumulatorFunc, initialValue) {
    const hasInitialValue = arguments.length > 1;
    let accumulator = hasInitialValue ? initialValue : this[0];

    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
      accumulator = accumulatorFunc(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
