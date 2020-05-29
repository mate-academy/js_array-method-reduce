'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;

    (initialValue === undefined)
      ? accumulator = this[0]
      : accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
      // console.log (accumulator);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
