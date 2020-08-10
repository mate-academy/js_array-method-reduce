'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let results = initialValue;
    let calc = 0;

    if (arguments.length <= 1) {
      results = this[0];
      calc = 1;
    }

    for (let i = calc; i < this.length; i++) {
      results = callback(results, this[i], i, this);
    }

    return results;
  };
}

module.exports = applyCustomReduce;
