'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let initialIndex = 0;

    if (arguments.length === 1) {
      prev = this[0];
      initialIndex = 1;
    }

    for (initialIndex; initialIndex < this.length; initialIndex++) {
      prev = callback(prev, this[initialIndex], initialIndex, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
