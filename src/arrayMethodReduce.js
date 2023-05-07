'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let initialIndex = 0;

    if (arguments.length < 2 && this.length > 1) {
      accumulator = this[0];
      initialIndex++;
    }

    for (let i = initialIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
