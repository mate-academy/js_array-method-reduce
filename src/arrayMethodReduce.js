'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue === undefined
      ? this[0]
      : initialValue;

    const loopStarter = initialValue === undefined ? 1 : 0;

    for (let i = loopStarter; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
};

module.exports = applyCustomReduce;
