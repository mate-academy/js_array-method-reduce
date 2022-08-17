'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let value = arguments.length > 1
      ? initialValue
      : this[0];

    const iterations = arguments.length > 1
      ? 0
      : 1;

    for (let i = iterations; i < this.length; i++) {
      value = callback(value, this[i], i, this);
    }

    return value;
  };
}

module.exports = applyCustomReduce;
