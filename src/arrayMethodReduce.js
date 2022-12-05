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

    for (let i = index; i < this.length; i++) {
      const element = this[i];

      accumulator = callback(accumulator, element, i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
