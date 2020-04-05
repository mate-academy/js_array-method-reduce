'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    const arr = this;
    const currentValue = initialValue === undefined ? 1 : 0;
    let accumulator = initialValue === undefined ? arr[0] : initialValue;

    for (let i = currentValue; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
