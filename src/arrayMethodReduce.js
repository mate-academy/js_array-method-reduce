'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator;

    if (arguments.length === 2 && initialValue === undefined) {
      accumulator = 'undefined' + this[0];
    } else {
      accumulator = initialValue === undefined ? this[0] : initialValue;
    }

    const currentIndex = initialValue === undefined ? 1 : 0;

    for (let i = currentIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
