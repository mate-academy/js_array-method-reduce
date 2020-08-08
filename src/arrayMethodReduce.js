'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, start) {
    let prev = start;
    let from = 0;

    if (arguments.length === 1) {
      prev = this[0]; from = 1;
    }

    for (let i = from; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
