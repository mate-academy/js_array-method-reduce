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

    let firstValue;
    let secondValue;
    let index = 0;

    if (initial !== undefined) {
      firstValue = initial;
      secondValue = this[0];
    } else {
      firstValue = this[0];
      secondValue = this[1];
      index = 1;
    }

    let accumulator = callback(firstValue, secondValue, index, this);

    for (let i = index + 1; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
