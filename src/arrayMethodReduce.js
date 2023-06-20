'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let reducedValue = initialValue;
    let index = 0;

    reducedValue = arguments.length < 2
      ? this[0]
      : reducedValue;

    index = arguments.length < 2
      ? 1
      : index;

    for (let i = index; i < this.length; i++) {
      reducedValue = callback(reducedValue, this[i], i, this);
    }

    return reducedValue;
  };
}

module.exports = applyCustomReduce;
