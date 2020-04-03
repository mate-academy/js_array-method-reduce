'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum,
      index;

    if (initialValue === undefined) {
      accum = this[0];
      index = 1;
    } else {
      accum = initialValue;
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
