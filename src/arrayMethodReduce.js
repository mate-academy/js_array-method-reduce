'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let startLoop;

    if (arguments.length < 2) {
      accumulator = this[0];
      startLoop = 1;
    } else {
      accumulator = initialValue;
      startLoop = 0;
    }

    for (let i = startLoop; this.length > i; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
