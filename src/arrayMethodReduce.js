'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startAtIndex = 0;

    if (arguments.length < 2) {
      startAtIndex = 1;
      acc = this[0];
    }

    for (let i = startAtIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
