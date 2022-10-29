'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let currentIndex = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      currentIndex = 1;
    }

    for (let i = currentIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
