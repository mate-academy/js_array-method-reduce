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
      iteration = 1;
    }

    for (iteration; iteration < this.length; iteration++) {
      accumulator = callback(accumulator, this[iteration], iteration, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
