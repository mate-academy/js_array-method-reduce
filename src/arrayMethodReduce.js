'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = this[0];
    let currentIndex = 1;

    if (arguments.length > 1) {
      previousValue = initialValue;
      currentIndex = 0;
    }

    for (let i = currentIndex; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
