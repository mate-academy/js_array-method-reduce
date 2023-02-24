'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let callbackResult = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      callbackResult = this[0];
      i++;
    }

    while (i < this.length) {
      callbackResult = callback(callbackResult, this[i], i, this);
      i++;
    }

    return callbackResult;
  };
}

module.exports = applyCustomReduce;
