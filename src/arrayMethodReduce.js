'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;

    let i = 0;

    if (arguments.length < 2) {
      acc = this[i];
      i++;
    }

    while (i < this.length) {
      acc = callback(acc, this[i], i, this);
      i++;
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
