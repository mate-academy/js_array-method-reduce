'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let sum;
    let startIndex;

    // If initialvalue is NOT Provided
    if (arguments.length === 1) {
      sum = typeof this[0] === 'string' ? '' : 0;
      startIndex = 0;
    }

    // If initialValue is explicitly provided as UNDEFINED
    if (arguments.length > 1 && initialValue === undefined) {
      sum = 'undefined';
      startIndex = 0;
    }

    // If initialValue is Provided
    if (arguments.length > 1 && initialValue !== undefined) {
      sum = initialValue;
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      sum = callback(sum, this[i], i, this);
    }

    return sum;
  };
}

module.exports = applyCustomReduce;
