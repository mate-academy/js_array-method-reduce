'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('The first argument must be a function');
    }

    const array = this;
    const length = array.length;

    if (length === 0 && arguments.length < 2) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator;
    let startIndex;

    if (arguments.length >= 2) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = array[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
