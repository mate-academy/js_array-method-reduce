'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startCount = 0;

    if (arguments.length < 2) {
      result = this[0];
      startCount = 1;
    };

    for (let i = startCount; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    };

    return result;
  };
}

module.exports = applyCustomReduce;
