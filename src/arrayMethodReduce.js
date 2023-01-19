'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let startIndex = 0;

    if (arguments.length === 1) {
      acc = this[0];
      startIndex = 1;
    } else if (arguments.length > 1 && initialValue === undefined) {
      acc = 'undefined';
    } else {
      acc = initialValue;
    }

    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
