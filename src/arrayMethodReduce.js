'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here

    let results = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      results = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      results = callback(results, this[i], i, this);
    }

    return results;
  };
}

module.exports = applyCustomReduce;
