'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;
    let initialIndex;

    if (initialValue === undefined) {
      acc = this[0];
      initialIndex = 1;
    } else {
      acc = initialValue;
      initialIndex = 0;
    }

    for (let i = initialIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
