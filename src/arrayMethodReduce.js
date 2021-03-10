'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = '') {
    let sum;
    let startValue;

    if (typeof initialValue === 'string') {
      sum = this[0];
      startValue = 1;
    } else {
      sum = 0;
      startValue = 0;
    };

    for (let i = startValue; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum || initialValue;
  };
}

module.exports = applyCustomReduce;
