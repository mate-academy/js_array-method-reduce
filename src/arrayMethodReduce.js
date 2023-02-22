'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const size = arguments.length;
    let acc = initialValue;
    let from = 0;

    if (size < 2) {
      from = 1;
      acc = this[0];
    }

    for (let i = from; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
