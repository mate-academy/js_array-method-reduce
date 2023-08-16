'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const argumentsLengthCompare = arguments.length < 2;

    let accumulator = argumentsLengthCompare ? this[0] : initialValue;
    const startedIndex = argumentsLengthCompare ? 1 : 0;

    for (let i = startedIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
