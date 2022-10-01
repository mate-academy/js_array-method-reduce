'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let amount = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      amount = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      amount = callback(amount, this[i], i, this);
    }

    return amount;
  };
}

module.exports = applyCustomReduce;
