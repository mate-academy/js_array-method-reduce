'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let i;

    if (arguments.length > 1) {
      accumulator = initialValue;
      i = 0;
    } else {
      accumulator = this[0];
      i = 1;
    };

    for (; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
