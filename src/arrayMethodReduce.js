'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let preValue = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      start = 1;
      preValue = this[0];
    }

    for (let i = start; i < this.length; i++) {
      preValue = callback(preValue, this[i], i, this);
    }

    return preValue;
  };
}

module.exports = applyCustomReduce;
