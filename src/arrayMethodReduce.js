'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const start = arguments.length < 2
      ? 1
      : 0;
    let final = arguments.length < 2
      ? this[0]
      : initialValue;

    for (let i = start; i < this.length; i++) {
      final = callback(final, this[i], i, this);
    }

    return final;
  };
}

module.exports = applyCustomReduce;
