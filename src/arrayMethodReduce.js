'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 'undefined') {
    let i = 0;
    let previousValue = initialValue;

    if (arguments.length === 1) {
      previousValue = this[0];
      i = 1;
    }

    let result = previousValue;

    for (; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
