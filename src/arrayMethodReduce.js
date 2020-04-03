'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum;
    let start;

    if (initialValue === undefined) {
      accum = this[0];
      start = 1;
    } else {
      accum = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
