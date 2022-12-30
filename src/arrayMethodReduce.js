'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const initPassed = arguments.length === 2;

    if (!initPassed && !this.length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = initPassed ? initialValue : this[0];
    let index = initPassed ? 0 : 1;

    while (index < this.length) {
      accumulator = callback(accumulator, this[index], index, this);
      index++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
