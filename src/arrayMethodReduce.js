'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const isTwoArguments = arguments.length === 2;

    const startIndex = isTwoArguments ? 0 : 1;
    let accumulator = isTwoArguments ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      const result = callback(accumulator, this[i], i, this);

      accumulator = result;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
