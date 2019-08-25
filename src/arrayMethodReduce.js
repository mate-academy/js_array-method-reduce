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
    let i = 0;

    if (arguments.length === 1) {
      acc = this[0];
      i++;
    } else {
      acc = initialValue;
    }

    for (i; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
