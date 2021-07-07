'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let i = (arguments.length < 2) ? 1 : 0;
    let accum = initialValue;

    while (i < this.length) {
      accum = callback(accum, this[i], i, this);
      i++;
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
