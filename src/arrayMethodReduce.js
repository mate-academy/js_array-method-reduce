'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      prev = this[0];
      startIndex = 1;
    }

    for (let index = startIndex; index < this.length; index++) {
      prev = callback(prev, this[index], index, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
