'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let result;
    let index = 0;

    if (arguments.length === 1) {
      accumulator = this[0];
      index = 1;
    }

    if (this.length === 0) {
      result = accumulator;

      return result;
    }

    for (let i = index; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    };

    return accumulator;
  };
};

module.exports = applyCustomReduce;
