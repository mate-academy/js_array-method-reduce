'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;

    if (initialValue === undefined && typeof (this[0]) === 'string') {
      accumulator = '';
    } else if (initialValue === undefined) {
      accumulator = null;
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
