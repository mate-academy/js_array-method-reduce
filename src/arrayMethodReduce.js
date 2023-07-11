'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let current;
    let itr = 0;

    if (arguments.length > 1) {
      current = initialValue;
    } else {
      current = this[0];
      itr++;
    }

    for (; itr < this.length; itr++) {
      current = callback(current, this[itr], itr, this);
    }

    return current;
  };
}

module.exports = applyCustomReduce;
