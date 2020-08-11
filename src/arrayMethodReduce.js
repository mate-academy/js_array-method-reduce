'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let results = initialValue;
    let calc = 0;

    if (arguments.length === 1) {
      results = this[0];
      calc = 1;
    }

    for (; calc < this.length; calc++) {
      if (calc in this) {
        results = callback(results, this[calc], calc, this);
      }
    }

    return results;
  };
}

module.exports = applyCustomReduce;
