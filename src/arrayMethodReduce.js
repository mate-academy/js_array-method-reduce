'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      prev = this[0];
      index = 1;
    }

    for (let q = index; q < this.length; q++) {
      prev = callback(prev, this[q], q, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
