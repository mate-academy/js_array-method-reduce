'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let returnValue = initialValue;
    let startIndex = 0;

    if (typeof initialValue === 'undefined' || initialValue == null) {
      startIndex = 1;
      returnValue = this[0];
    }

    for (let i = startIndex; i < this.length; i++) {
      returnValue = callback(returnValue, this[i], i, this);
    }

    return returnValue;
  };
}

module.exports = applyCustomReduce;
