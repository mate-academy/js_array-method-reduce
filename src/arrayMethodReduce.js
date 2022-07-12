'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let initialValue1 = initialValue;

    if (initialValue1.length === 0) {
      initialValue1 = undefined;
    } else {
      if (initialValue1[0] === undefined) {
        initialValue1 = 'undefined';
      } else {
        initialValue1 = initialValue1[0];
      }
    }

    if (this.length < 1) {
      return initialValue1;
    }

    let first;
    let second;
    let index = 0;

    if (initialValue1 !== undefined) {
      first = initialValue1;
      second = this[0];
    } else {
      first = this[0];
      second = this[1];
      index = 1;
    }

    let accumulator = callback(first, second, index, this);

    for (let i = index + 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
