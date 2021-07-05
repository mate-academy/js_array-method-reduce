'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError('An empty array without an initialValue');
    }

    if (this.length === 0 && initialValue !== undefined) {
      return initialValue;
    }

    if (this.length === 1 && initialValue === undefined) {
      return this[0];
    }

    let start = 1;
    let accumulator = this[0];

    if (initialValue !== undefined) {
      start = 0;
      accumulator = initialValue;
    }

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
