'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accumValue = initialValue;
    let firstIndex = 0;

    if (initialValue == null) {
      accumValue = this[0];
      firstIndex = 1;
    }

    for (let i = firstIndex; i < this.length; i++) {
      accumValue = callback(accumValue, this[i], i, this);
    }

    return accumValue;
  };
}

module.exports = applyCustomReduce;
