'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result;
    let curentIndex = 0;

    if (initialValue === undefined) {
      result = this[0];
      curentIndex = 1;
    } else {
      result = initialValue;
    }

    for (let i = curentIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
