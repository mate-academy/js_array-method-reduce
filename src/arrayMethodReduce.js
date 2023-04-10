'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let firstValue = initialValue;
    let i = 0;

    if (!(1 in arguments)) {
      firstValue = this[0];
      i++;
    }

    for (i; i < this.length; i++) {
      firstValue = callback(firstValue, this[i], i, this);
    }

    return firstValue;
  };
}

module.exports = applyCustomReduce;
