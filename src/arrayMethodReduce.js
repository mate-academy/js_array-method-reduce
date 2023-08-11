'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let index = 0;

    if (arguments.length === 1) {
      index = 1;
      acc = this[0];
    }

    for (index; index < this.length; index++) {
      acc = callback(acc, this[index], index, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
