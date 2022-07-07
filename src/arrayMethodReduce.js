'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const firstIndex = arguments.length === 1 ? 1 : 0;
    let accumulator = arguments.length === 1 ? this[0] : initialValue;

    for (let index = firstIndex; index < this.length; index++) {
      accumulator = callback(accumulator, this[index], index, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
