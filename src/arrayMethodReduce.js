'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const startValue = arguments.length <= 1
      ? 1
      : 0;

    let previousValue = arguments.length <= 1
      ? this[0]
      : initialValue;

    for (let i = startValue; i < this.length; i++) {
      previousValue = callback(previousValue, this[i], i, this);
    }

    return previousValue;
  };
}

/* function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const start = arguments.length < 2
      ? 1
      : 0;
    let finalValue = arguments.length < 2
      ? this[0]
      : initialValue;

    for (let i = start; i < this.length; i++) {
      finalValue = callback(finalValue, this[i], i, this);
    }

    return finalValue;
  };
} */

module.exports = applyCustomReduce;
