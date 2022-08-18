'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = arguments.length !== 1
      ? callback(initialValue, this[0], 0, this) : this[0];

    for (let i = 1; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}
applyCustomReduce();

module.exports = applyCustomReduce;
