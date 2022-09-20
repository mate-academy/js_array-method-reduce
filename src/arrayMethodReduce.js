'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let current = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      current = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      current = callback(current, this[i], i, this);
    }

    return current;
  };
}

module.exports = applyCustomReduce;
