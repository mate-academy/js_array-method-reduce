'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let iteration = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      iteration++;
    }

    while (iteration < this.length) {
      accumulator = callback(accumulator, this[iteration], iteration, this);
      iteration++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
