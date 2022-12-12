'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue, index) {
    let prev = arguments.length < 2
      ? this[0]
      : initialValue;

    const startIndex = prev === this[0]
      ? 1
      : 0;

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
