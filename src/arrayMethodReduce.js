'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      i = 1;
    } else if (accumulator === undefined) {
      accumulator = 'undefined';
    }

    for (i; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
