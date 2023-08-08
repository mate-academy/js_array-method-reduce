'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let accumulator = initialValue.length > 0
      ? initialValue[0]
      : this[0];
    let startIndex = initialValue.length ? 0 : 1;

    for (startIndex; startIndex < this.length; startIndex++) {
      accumulator = callback(accumulator, this[startIndex], startIndex, this);
    }

    return accumulator;
  };
};

module.exports = applyCustomReduce;
