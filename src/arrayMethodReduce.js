'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = (initialValue === undefined) ? this[0] : initialValue;
    const start = (initialValue === undefined) ? 1 : 0;

    for (let index = start; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
