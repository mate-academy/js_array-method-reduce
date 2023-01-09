'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    // write code here
    let accumulator = initialValue.length === 0 ? this[0] : initialValue[0];
    const start = initialValue.length === 0 ? 1 : 0;

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
