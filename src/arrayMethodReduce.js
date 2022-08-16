'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const { length } = this;

    let acc = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      acc = this[0];
      start = 1;
    }

    for (let index = start; index < length; index += 1) {
      const value = this[index];

      acc = callback(acc, value, index, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
