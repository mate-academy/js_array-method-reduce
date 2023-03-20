'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let initValueFlag = 0;

    if ('1' in arguments) {
      accumulator = initialValue;
    } else {
      accumulator = this[0];
      initValueFlag = 1;
    }

    for (let i = initValueFlag; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
