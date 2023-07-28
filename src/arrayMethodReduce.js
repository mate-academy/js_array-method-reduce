'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      index = 1;
      acc = this[index - 1];
    }

    for (index; index < this.length; index++) {
      const result = callback(acc, this[index], index, this);

      acc = result;
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
