'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum;
    let i = 0;

    if (initialValue !== undefined) {
      accum = initialValue;
    } else {
      accum = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    };

    return accum;
  };
}

module.exports = applyCustomReduce;
