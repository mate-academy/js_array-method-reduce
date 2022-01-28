'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startFrom = 0;
    let accumulator = initialValue;

    if (arguments.length === 1) {
      startFrom = 1;
      accumulator = this[0];
    }

    for (let i = startFrom; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
