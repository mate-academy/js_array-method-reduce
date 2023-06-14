'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const hasInitValue = arguments.length > 1;
    let acc = arguments.length > 1
      ? initialValue
      : this[0];

    for (
      let i = hasInitValue ? 0 : 1;
      i < this.length;
      i++
    ) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
