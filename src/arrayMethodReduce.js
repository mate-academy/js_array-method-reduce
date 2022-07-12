'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let initial = initialValue;

    if (initial.length === 0) {
      initial = undefined;
    } else {
      if (initial[0] === undefined) {
        initial = 'undefined';
      } else {
        initial = initial[0];
      }
    }

    if (this.length < 1) {
      return initial;
    }

    let first;
    let second;
    let index = 0;

    if (initial !== undefined) {
      first = initial;
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
