'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let startPoint = 0;
    if (initialValue === undefined) {
      startPoint = 1;
      result = this[0];
    }

    for (startPoint; startPoint < this.length; startPoint++) {
      result = callback(result, this[startPoint], startPoint, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
