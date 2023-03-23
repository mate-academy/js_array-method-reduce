'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let pr = arguments.length === 2
      ? initialValue
      : this[0];
    const index = arguments.length === 2
      ? 0
      : 1;

    for (let i = index; i < this.length; i++) {
      pr = callback(pr, this[i], i, this);
    }

    return pr;
  };
}

module.exports = applyCustomReduce;
