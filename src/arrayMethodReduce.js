'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let accumulator;

    if (initialValue === +initialValue) {
      accumulator = initialValue;
    } else if (typeof this[0] === 'string') {
      accumulator = '';
    }

    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
  };
}

module.exports = applyCustomReduce;
