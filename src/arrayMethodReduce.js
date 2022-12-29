'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = arguments.length < 2 ? this[0] : initialValue;
    const start = arguments.length < 2 ? 1 : 0;

    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
