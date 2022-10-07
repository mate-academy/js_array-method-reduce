'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = this[0];
    let start = 1;

    if (arguments.length !== 1) {
      prev = initialValue;
      start = 0;
    }

    for (let i = start; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
