'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accum = this[0];
      startIndex = 1;
    }

    for (startIndex; startIndex < this.length; startIndex++) {
      accum = callback(accum, this[startIndex], startIndex, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
