'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }

    if (this.length === 0) {
      return initialValue;
    }

    let startIndex = 0;
    let acc;

    if (arguments.length === 2) {
      acc = initialValue;
    } else {
      acc = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
