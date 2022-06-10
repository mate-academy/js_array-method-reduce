'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      prev = this[0];
      startIndex = 1;
    }

    for (startIndex; startIndex < this.length; startIndex++) {
      prev = callback(prev, this[startIndex], startIndex, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
