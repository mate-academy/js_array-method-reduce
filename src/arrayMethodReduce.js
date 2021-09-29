'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialVal) {
    let accumulator = initialVal === undefined
      ? this[0]
      : initialVal;
    const start = initialVal === undefined
    	? 1
    	: 0;

    for (let i = start; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
