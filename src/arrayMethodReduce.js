'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      prev = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      const curr = this[i];
      const ind = i;
      const arr = this;

      prev = callback(prev, curr, ind, arr);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
