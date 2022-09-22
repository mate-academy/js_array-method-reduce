'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let amount = initialValue;
    let numOfIteration = 0;

    if (arguments.length < 2) {
      amount = this[0];
      numOfIteration = 1;
    }

    for (let i = numOfIteration; i < this.length; i++) {
      amount = callback(amount, this[i], i, this);
    }

    return amount;
  };
}

module.exports = applyCustomReduce;
