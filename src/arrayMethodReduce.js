'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;

    if (accumulator === undefined) {
      accumulator = this[0];
    };

    if (typeof accumulator === 'string') {
      accumulator = '';
    };

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    };

    return accumulator;
  };
}

module.exports = applyCustomReduce;
