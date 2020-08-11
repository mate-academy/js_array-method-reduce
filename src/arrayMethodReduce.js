'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;
    let count = 0;

    if (accum === undefined) {
      accum = this[0];
      count++;
    }

    while (this.length > count) {
      accum = callback(accum, this[count], count, this);

      count++;
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
