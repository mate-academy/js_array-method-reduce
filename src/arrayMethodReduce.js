'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let indexStart = 0;
    let result = initialValue;

    if (initialValue === undefined) {
      indexStart = 1;
      result = this[0];
    }

    for (indexStart; indexStart < this.length; indexStart++) {
      result = callback(result, this[indexStart], indexStart, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
