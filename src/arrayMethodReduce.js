'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      prev = this[0];
      i = 1;
    }

    while (i < this.length) {
      prev = callback(prev, this[i], i, this);
      i++;
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
