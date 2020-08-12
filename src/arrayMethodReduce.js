'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let prev = initialValue;
    let i = 0;

    if (prev === this[0]) {
      i = 1;
    }

    for (; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
};

module.exports = applyCustomReduce;
