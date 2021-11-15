'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;

    if (arguments.length < 2) {
      prev = this[0];
    } else {
      prev = callback(prev, this[0], 0, this);
    }

    for (let i = 1; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
