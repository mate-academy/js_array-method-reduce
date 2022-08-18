'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const haveInitialValue = !(arguments.length < 2);
    const startIndex = haveInitialValue ? 0 : 1;
    let accumulator = haveInitialValue ? initialValue : this[0];

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
