'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;

    if (Number.isInteger(initialValue)) {
      accumulator = initialValue;
    } else if (typeof this[0] === 'string') {
      accumulator = '';
    } else if (typeof this[0] === 'number') {
      accumulator = this[0];
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this, initialValue);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
