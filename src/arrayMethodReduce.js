'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;
    let indexStartedFrom = 0;

    if (arguments.length < 2) {
      accumulator = this[0];
      indexStartedFrom = 1;
    }

    for (let i = indexStartedFrom; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
