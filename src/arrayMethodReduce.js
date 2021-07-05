'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let returnValue = '';

    if (initialValue === (+initialValue)) {
      returnValue = 0;
    }

    if (this.length === 0) {
      return initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      returnValue = callback(returnValue, this[i], i, this);
    }

    return returnValue;
  };
}

module.exports = applyCustomReduce;
