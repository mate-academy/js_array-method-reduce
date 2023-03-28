'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = this[0];
    let i = 1;

    if (arguments.length === 2) {
      start = initialValue;
      i = 0;
    }

    for (; i < this.length; i++) {
      start = callback(start, this[i], i, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
