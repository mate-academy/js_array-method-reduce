'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
};

module.exports = applyCustomReduce;
