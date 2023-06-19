'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let finalValue = arguments.length < 2 ? this[0] : initialValue;
    let i = arguments.length < 2 ? 1 : 0;

    for (; i < this.length; i++) {
      finalValue = callback(finalValue, this[i], i, this);
    }

    return finalValue;
  };
}

module.exports = applyCustomReduce;
