'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let result = initialValue;
    let startInex = 0;

    [result, startInex] = arguments.length < 2
      ? [this[0], 1]
      : [result, startInex];

    for (let i = startInex; this.length > i; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
