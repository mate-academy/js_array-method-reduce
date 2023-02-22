'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = arguments.length > 1 ? initialValue : this[0];
    const firstElement = arguments.length > 1 ? 0 : 1;

    for (let i = firstElement; i < this.length; i++) {
      if (this[i] !== '') {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
