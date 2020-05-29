'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (initialValue === undefined && i === 0) {
        accumulator = this[i];
      } else {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
};

// const sourceNumbers = [0, 10, 20, 30];
// const sourceStr = ['a', 'b', 'c', 'd'];

applyCustomReduce();
// sourceStr.reduce2((sum, x) => sum + x);
module.exports = applyCustomReduce;
