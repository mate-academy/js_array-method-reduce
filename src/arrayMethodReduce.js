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

    for (currentIndex; currentIndex < this.length; currentIndex++) {
      previousValue
        = callback(previousValue, this[currentIndex], currentIndex, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
