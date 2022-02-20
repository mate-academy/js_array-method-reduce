'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = 0;
    let accum = initialValue;

    if (arguments.length < 2) {
      result = 1;
      accum = this[0];
    }

    for (let i = result; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
