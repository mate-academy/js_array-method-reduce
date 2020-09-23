/* eslint-disable space-before-function-paren */
'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function (callback, initialValue) {
    // write code here
    let startValue = initialValue;
    let startIdx = 0;

    if (arguments.length < 2) {
      startValue = this[0];
      startIdx = 1;
    }

    for (let i = startIdx; i < this.length; i++) {
      startValue = callback(startValue, this[i], i, this);
    }

    return startValue;
  };
}

module.exports = applyCustomReduce;
