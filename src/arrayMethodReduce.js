'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startFrom;
    let accumulator;

    // different situations when initialValue defined and when didnt
    if (arguments.length < 2) {
      accumulator = this[0];
      startFrom = 1;
    } else {
      accumulator = initialValue;
      startFrom = 0;
    }

    // in the case when callback havent got
    if (arguments.length < 1) {
      startFrom = 0;
    }

    // reduce logic actually
    for (let i = startFrom; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
      /* callback should can operate next values:
      accumulator, currentValue (it is current element), index, array */
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
