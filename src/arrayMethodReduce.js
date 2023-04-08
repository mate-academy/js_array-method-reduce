'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    const [callback, initialValue] = args;

    let accumulator = initialValue;
    let index = 0;

    if (args.length < 2) {
      accumulator = this[0];
      index = 1;
    }

    while (index < this.length) {
      const current = this[index];

      accumulator = callback(accumulator, current, index, this);
      index++;
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
