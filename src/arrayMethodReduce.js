'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let accumulator = initialValue;
    let i;

    (arguments.length === 1) ? i = 1 : i = 0;

    for (i; i < this.length; i++) {
      accumulator = (callback(accumulator, this[i], i, this));
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
