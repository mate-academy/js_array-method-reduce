'use strict';
/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 1;
    let accum = this[0];

    if (arguments.length >= 2) {
      accum = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

applyCustomReduce();

module.exports = applyCustomReduce;
