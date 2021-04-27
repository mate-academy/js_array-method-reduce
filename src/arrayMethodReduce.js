'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let accum = initialValue;

    if (initialValue === undefined) {
      accum = this[0];
      start = 1;
    }

    let value;

    for (let i = start; i < this.length; i++) {
      value = this[i];
      accum = callback(accum, value, i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
