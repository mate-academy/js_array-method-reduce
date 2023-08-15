'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = arguments.length < 2 ? 1 : 0;
    let accumulator = arguments.length < 2 ? this[0] : initialValue;

    for (startIndex; startIndex < this.length; startIndex++) {
      accumulator = (callback(accumulator, this[startIndex], startIndex, this));
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
