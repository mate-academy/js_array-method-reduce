'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, /* initialValue */) {
    const hasInitialValue = arguments.length >= 2;
    let accumulator = hasInitialValue ? arguments[1] : this[0];

    for (let i = hasInitialValue ? 0 : 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
