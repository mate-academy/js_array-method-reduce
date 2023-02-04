'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let previousValue = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previousValue = this[0];
      startIndex = 1;
    }

    for (let index = startIndex; index < this.length; index++) {
      previousValue = callback(previousValue, this[index], index, this);
    }

    return previousValue;
  };
}

module.exports = applyCustomReduce;
