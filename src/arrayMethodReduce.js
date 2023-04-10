'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let initValue = 0;

    if (arguments.length === 1) {
      if (this.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }

      initValue = this[0];
      start = 1;
    } else if (arguments.length > 1) {
      initValue = arguments[1];
    }

    let accumulator = initValue;

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
