'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prevElement = arguments.length === 1
      ? this[0]
      : initialValue;
    let index = arguments.length === 1
      ? 1
      : 0;

    for (index; index < this.length; index++) {
      prevElement = callback(prevElement, this[index], index, this);
    }

    return prevElement;
  };
}

module.exports = applyCustomReduce;
