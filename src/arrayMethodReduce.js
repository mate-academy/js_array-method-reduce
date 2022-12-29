'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startPosition = 0;
    let result = initialValue;

    if (arguments.length < 2) {
      startPosition = 1;
      result = this[0];
    }

    for (let i = startPosition; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
