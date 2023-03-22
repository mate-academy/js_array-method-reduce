'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const arr = this;
    let accumulator = initialValue;
    let startIndex = 0;

    if (arguments.length === 1) {
      accumulator = arr[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
