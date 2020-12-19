'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumulator = initialValue;

    if (typeof accumulator === 'undefined') {
      if (typeof this[0] === 'string') {
        accumulator = '';
      } else {
        accumulator = 0;
      }
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
