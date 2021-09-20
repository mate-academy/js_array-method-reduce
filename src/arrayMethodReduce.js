'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 0) {
    const start = arguments.length > 1 ? 0 : 1;
    let startSum = arguments.length > 1 ? initialValue : this[0];

    for (let i = start; i < this.length; i++) {
      startSum = callback(startSum, this[i], i, this);
    }

    return startSum;
  };
}

module.exports = applyCustomReduce;
