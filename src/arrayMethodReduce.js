'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultiveValue = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      resultiveValue = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      resultiveValue = callback(resultiveValue, this[i], i, this);
    }

    return resultiveValue;
  };
}

module.exports = applyCustomReduce;
