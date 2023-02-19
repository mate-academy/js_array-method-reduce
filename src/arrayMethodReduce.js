'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let newValue = initialValue;

    if (arguments.length < 2) {
      newValue = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      newValue = callback(newValue, this[i], i, this);
    }

    return newValue;
  };
}

module.exports = applyCustomReduce;
