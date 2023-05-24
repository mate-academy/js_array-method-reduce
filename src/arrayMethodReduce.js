'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let preValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      preValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      preValue = callback(preValue, this[i], i, this);
    }

    return preValue;
  };
}

module.exports = applyCustomReduce;
