'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  // eslint-disable-next-line space-before-function-paren
  [].__proto__.reduce2 = function (callback, initialValue = this[0]) {
    // write code here

    let previous = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      previous = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      previous = callback(previous, this[i], i, this);
    }

    return previous;
  };
}

module.exports = applyCustomReduce;
