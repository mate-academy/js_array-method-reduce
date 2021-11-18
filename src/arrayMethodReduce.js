'use strict';

/**
 * Implement method Reduce
 */
const applyCustomReduce = () => {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      start++;
    }

    for (let i = start; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
};

module.exports = applyCustomReduce;
