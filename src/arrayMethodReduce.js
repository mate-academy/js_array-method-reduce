'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const args = Array.from(arguments);

    let result = initialValue;
    let currentIndex = 0;

    if (args.length < 2) {
      result = this[0];
      currentIndex = 1;
    }

    for (let i = currentIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
