'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acc = (arguments.length < 2)
      ? this[0]
      : initialValue;

    const startIndex = (arguments.length < 2)
      ? 1
      : 0;

    for (let index = startIndex; index < this.length; index++) {
      acc = callback(acc, this[index], index, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
