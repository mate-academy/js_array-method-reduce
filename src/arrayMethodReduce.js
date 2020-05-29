'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;

    if (initialValue === 0) {
      accumulator = initialValue;
    } else if (typeof this[0] === 'string' && !initialValue) {
      accumulator = '';
    } else if (typeof this[0] === 'number' && !initialValue) {
      accumulator = this[0];
    } else {
      accumulator = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this, initialValue);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
