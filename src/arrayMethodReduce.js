'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum;

    if (this.length === 0) {
      return initialValue;
    }
    let i = arguments.length === 1 ? 1 : 0;
    accum = arguments.length === 1 ? this[0] : initialValue;

    for (; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
