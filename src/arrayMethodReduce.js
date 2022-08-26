'use strict';
/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let j = 0;
    let accum = 0;

    if (arguments.length >= 2) {
      accum = initialValue;
    } else {
      accum = this[0];
      j++;
    }

    for (let i = j; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

applyCustomReduce();

module.exports = applyCustomReduce;
