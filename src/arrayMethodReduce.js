'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedNumber = initialValue;
    let i = 0;

    if (arguments.length === 1) {
      i = 1;
      reducedNumber = this[0];
    }

    for (i; i < this.length; i++) {
      reducedNumber = callback(reducedNumber, this[i], i, this);
    }

    return reducedNumber;
  };
}

module.exports = applyCustomReduce;
