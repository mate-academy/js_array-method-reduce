'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulate = arguments.length === 1 ? this[0] : initialValue;
    let i = arguments.length === 1 ? 1 : 0;

    for (i; i < this.length; i++) {
      accumulate = callback(accumulate, this[i], i, this);
    }

    return accumulate;
  };
}

module.exports = applyCustomReduce;
