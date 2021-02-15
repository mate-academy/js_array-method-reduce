'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let previousValue = initialValue;
    let i = 0;

    if (previousValue === this[0]) {
      i = 1;
    }

    for (; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
};

module.exports = applyCustomReduce;
