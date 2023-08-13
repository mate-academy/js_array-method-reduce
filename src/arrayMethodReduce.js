'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = arguments.length > 1 ? initialValue : this[0];
    const startIndex = arguments.length > 1 ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    if (initialValue === 'undefined') {
      accumulator = 'undefined' + accumulator;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;

