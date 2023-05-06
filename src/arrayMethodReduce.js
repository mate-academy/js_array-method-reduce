'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let initialIndex = 0;

    if (arguments.length === 1) {
      accumulator = this[0];
      initialIndex = 1;
    } else if (arguments.length === 2 && initialValue === undefined) {
      accumulator = 'undefined';
    } else {
      accumulator = initialValue;
    }

    for (let i = initialIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
