'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const startValue = arguments.length > 1 ? 0 : 1;
    let prev = arguments.length > 1 ? initialValue : this[0];

    for (let i = startValue; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
