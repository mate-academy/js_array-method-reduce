'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const arr = this;
    let sum;
    let index = 0;

    if (initialValue === undefined) {
      sum = arr[0];
      index = 1;
    } else {
      sum = initialValue;
    }

    for (let i = index; i < arr.length; i++) {
      sum = callback(sum, arr[i], i, arr);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
