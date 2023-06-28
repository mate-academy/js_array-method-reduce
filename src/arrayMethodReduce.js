'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const onlyOneArg = arguments.length === 1;

    let accumulator = onlyOneArg ? this[0] : initialValue;

    const currentValue = onlyOneArg ? 1 : 0;

    for (let i = currentValue; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
};

module.exports = applyCustomReduce;
