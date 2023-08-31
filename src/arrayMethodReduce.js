'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    const callback = args[0];
    let accumulator = args[1];
    let index = 0;

    if (this.length === 0) {
      return accumulator;
    }

    if (args.length === 1) {
      accumulator = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
