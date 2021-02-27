'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;
    let i = 0;

    if (initialValue === undefined) {
      accum = this[0];
      i = 1;
    }

    for (; i < this.length; i++) {
      accum = callback(accum, this[i], i, this, initialValue);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
