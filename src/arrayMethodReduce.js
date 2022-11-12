'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue, index = 0) {
    let prev = this[index];
    let startIndex = 1;

    if (arguments.length >= 2) {
      prev = initialValue;
      startIndex = index;
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
