'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let accumulator = initialValue.length > 0
      ? initialValue[0]
      : this[0];
    const startIndex = initialValue.length ? 0 : 1;

    if (startIndex === 1 && this.length > 0) {
      accumulator = this[0];
    } else if (startIndex === 0 && initialValue === undefined) {
      accumulator = 'undefined';
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
};

module.exports = applyCustomReduce;
