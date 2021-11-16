'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = (arguments.length > 1
      ? initialValue
      : this[0]);

    const index = (arguments.length > 1
      ? 0
      : 1);

    for (let i = index; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
