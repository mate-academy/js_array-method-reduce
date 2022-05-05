'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let previousValue = initialValue;
    let zeroIndex = 0;

    if (arguments.length <= 1) {
      zeroIndex = 1;
      previousValue = this[0];
    }

    for (let i = zeroIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
