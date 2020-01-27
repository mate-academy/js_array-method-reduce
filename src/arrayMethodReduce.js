'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!this.length) {
      if (initialValue !== undefined) {
        return initialValue;
      } else {
        throw new TypeError();
      }
    }

    if (this.length === 1 && !initialValue) {
      return this[0];
    }

    let startValue = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (; startIndex < this.length; ++startIndex) {
      startValue = callback(startValue, this[startIndex], startIndex, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
