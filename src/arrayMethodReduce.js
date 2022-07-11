'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let result = this[0];
    let index = 1;

    if (initialValue.length > 0) {
      result = initialValue[0];
      index = 0;
    }

    for (index; index <= this.length - 1; index++) {
      result = callback(result, this[index], index, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
