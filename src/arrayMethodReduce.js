'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
      throw new TypeError(`Reduce of empty 
        array with no initial value at Array.reduce`);
    }

    let accumulator;
    let startValue;

    if (initialValue === undefined) {
      accumulator = this[0];
      startValue = 1;
    } else {
      accumulator = initialValue;
      startValue = 0;
    }

    for (let i = startValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
