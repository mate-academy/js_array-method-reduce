'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum = initialValue;

    if (!initialValue && typeof this[0] === 'number') {
      sum = 0;
    }

    if (!initialValue && typeof this[0] === 'string') {
      sum = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
