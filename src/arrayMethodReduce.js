'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let result = initialValue;
    let startPoint = 0;
    if (arguments.length < 2) {
      startPoint = 1;
    }

    for (; startPoint < this.length; startPoint++) {
      result = callback(result, this[startPoint], startPoint, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
