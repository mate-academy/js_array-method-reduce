'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;
    let startIndex;

    if (initialValue === undefined) {
      acc = this[0];
      startIndex = 1;
    } else {
      acc = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
