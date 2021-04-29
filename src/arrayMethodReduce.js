'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let start = 0;

    if (arguments.length === 1) {
      prev = this[0];
      start = 1;
    }

    for (let i = start; start < this.length; i++) {
      prev = callback(this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
