'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      start = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      start = callback(start, this[i], i, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
