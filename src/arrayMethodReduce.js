'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let startVal = 0;
    let accumVal = initialValue;

    if (initialValue === undefined) {
      startVal = 1;
      accumVal = this[0];
    }

    for (let i = startVal; i < this.length; i++) {
      accumVal = callback(accumVal, this[i], i, this);
    }

    return accumVal;
  };
}

module.exports = applyCustomReduce;
