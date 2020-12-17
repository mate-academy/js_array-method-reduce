'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const startWith = initialValue === undefined ? 1 : 0;
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for (let i = startWith; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
