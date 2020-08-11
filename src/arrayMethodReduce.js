'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (arguments.length === 0 || typeof callback !== 'function') {
      return;
    }

    let returnValue = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
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
