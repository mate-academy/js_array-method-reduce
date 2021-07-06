'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = this[0];
    let currVal = 1;

    if (initialValue !== undefined) {
      accum = initialValue;
      currVal = 0;
    }

    for (let i = currVal; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
