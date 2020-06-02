'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;

    (isNaN(this[0])) ? accumulator = initialValue : accumulator = 0;

    if (this[0] === this[0] + '' && initialValue === undefined) {
      accumulator = '';
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
