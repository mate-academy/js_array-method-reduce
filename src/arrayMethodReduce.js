'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startingIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startingIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    if (initialValue !== undefined) {
      accumulator = initialValue + accumulator;
    } else if (typeof accumulator === 'string') {
      accumulator = undefined + accumulator;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
