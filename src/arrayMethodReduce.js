'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevElement = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      prevElement = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prevElement = callback(prevElement, this[i], i, this);
    }

    return prevElement;
  };
}

module.exports = applyCustomReduce;
