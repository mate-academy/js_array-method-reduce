"use strict";

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function (callback, initialValue) {
    let result;
    let i = 0;

    if (arguments.length >= 2) {
      result = initialValue;
    } else {
      result = this[i];
      i++;
    }

    for (; i < this.length; i++) {
      if (i in this) {
        result = callback(result, this[i], i, this);
      }
    }

    return result;
  };
}

module.exports = applyCustomReduce;
