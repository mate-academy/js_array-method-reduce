'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initalValue) {
    let acc = initalValue;
    let fromIndex = 0;

    if (arguments.length < 2) {
      acc = this[0];
      fromIndex = 1;
    }

    for (let i = fromIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
