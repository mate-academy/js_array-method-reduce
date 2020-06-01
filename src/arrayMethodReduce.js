'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const arr = Object(this);
    let accumulator;
    let i = 0;

    if (arguments.length >= 2) {
      accumulator = arguments[1];
    } else {
      while (i < arr.length && !(i in arr)) {
        i++;
      }
      accumulator = arr[i++];
    }

    for (; i < this.length; i++) {
      if (i in arr) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
