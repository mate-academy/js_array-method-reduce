'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startAtIndex = 0;

    if (initialValue === undefined) {
      acc = this[0];
      startAtIndex = 1;
    }

    for (let i = startAtIndex; i < this.length; i += 1) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
