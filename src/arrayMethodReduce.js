'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acc;

    if (typeof callback !== 'function') {
      return this;
    }

    if (initialValue === undefined) {
      acc = this[0];

      for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
      }

      return acc;
    } else if (Object.is(initialValue, NaN)) {
      acc = initialValue.toString();
    } else {
      acc = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
