'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let x = 0;
    let accumulator = arguments.length === 1 ? this[0] : initialValue;

    if (accumulator === this[0]) {
      x++;
    }

    for (let i = x; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
