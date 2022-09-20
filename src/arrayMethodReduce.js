'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new Error('not a function');
    }

    if (this.length === 0 && !initialValue) {
      throw new Error('no initial value and array is empty');
    }

    let k = 0;
    let accumulator = typeof this[0] === 'number'
      ? 0
      : '';
    let kPresent;

    if (arguments.length === 2) {
      accumulator = initialValue;
    } else {
      kPresent = false;

      while (!kPresent && k < this.length) {
        kPresent = this[k];
        accumulator = callback(accumulator, this[k], k, this);
        k++;
      }
    }

    while (k < this.length) {
      accumulator = callback(accumulator, this[k], k, this);
      k++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
