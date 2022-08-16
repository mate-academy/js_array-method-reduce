'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, startValue) {
    let prev = startValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      prev = this[0];
    }

    for (let i = start; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
