'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      index = 1;
    }

    for (index; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
