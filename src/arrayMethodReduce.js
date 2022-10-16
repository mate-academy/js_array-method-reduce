'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let amount = (arguments.length < 2) ? this[0] : initialValue;
    const startIndex = (arguments.length < 2) ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      amount = callback(amount, this[i], i, this);
    }

    return amount;
  };
}

module.exports = applyCustomReduce;
