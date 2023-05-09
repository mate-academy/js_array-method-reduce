'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = arguments.length > 1 ? initialValue : this[0];
    const start = arguments.length > 1 ? 0 : 1;

    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
