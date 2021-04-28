'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = this[0];
    let pos = 1;

    if (initialValue !== undefined) {
      prev = initialValue;
      pos = 0;
    }

    for (let i = pos; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
