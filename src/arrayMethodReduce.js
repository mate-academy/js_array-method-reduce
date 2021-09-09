'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let sum = initialValue === undefined ? 0 : initialValue;

    if (typeof this[0] === 'string' && initialValue === undefined) {
      sum = '';
    }

    for (let i = 0; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
