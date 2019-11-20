'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0) {
      return initialValue;
    }

    let accumulator = 0;

    if (initialValue !== undefined) {
      accumulator = initialValue;
    } else {
      accumulator = this[0];
      if (typeof this[0] === 'string') {
        accumulator = '';
      }
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
