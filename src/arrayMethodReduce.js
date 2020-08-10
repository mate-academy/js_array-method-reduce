'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let index = 0;

    if (initialValue === undefined) {
      result = this[0];
      index = 1;
    }

    for (index; index < this.length; index++) {
      result = callback(result, this[index], index, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
