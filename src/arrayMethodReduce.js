'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reduceValue = arguments.length > 1 ? initialValue : this[0];

    let i = arguments.length > 1 ? 0 : 1;
    while (i < this.length) {
      reduceValue = callback(reduceValue, this[i], i, this);
      i++;
    }

    return reduceValue;
  };
}

module.exports = applyCustomReduce;
