'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let start = 0;
    const arrCopy = [...this];

    if (initialValue === undefined && arguments.length < 2) {
      accumulator = this[0];
      start = 1;
    }

    for (let i = start; i < arrCopy.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
