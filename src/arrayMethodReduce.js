'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let beginFrom = 0;

    if (arguments.length === 1) {
      previousValue = this[0];
      beginFrom = 1;
    }

    for (let idx = beginFrom; idx < this.length; idx++) {
      previousValue = callback(previousValue, this[idx], idx, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
