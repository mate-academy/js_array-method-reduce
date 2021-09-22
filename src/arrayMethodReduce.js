'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let acc;

    if (initialValue !== undefined) {
      acc = initialValue;

      for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this, initialValue);
      }
    } else {
      acc = this[0];

      for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this, initialValue);
      }
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
