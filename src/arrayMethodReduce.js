'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let i = 0;
    let aggregator = initialValue;

    if (initialValue === undefined) {
      i = 1;
      aggregator = this[0];
    };

    for (i; i < this.length; i++) {
      aggregator = callback(aggregator, this[i], i, this);
    }

    return aggregator;
  };
}

module.exports = applyCustomReduce;
