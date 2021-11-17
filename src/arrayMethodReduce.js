'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      accum = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
