'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const argsLengthChecking = arguments.length < 2;

    let accumulator = argsLengthChecking ? this[0] : initialValue;

    const firstIndex = argsLengthChecking ? 1 : 0;

    for (let i = firstIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
