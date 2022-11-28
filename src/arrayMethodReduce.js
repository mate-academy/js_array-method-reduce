'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let iterator = 0;
    let accumulator = (arguments.length < 2)
      ? this[iterator++]
      : initialValue;

    while (iterator < this.length) {
      accumulator = callback(accumulator, this[iterator], iterator, this);
      iterator++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
