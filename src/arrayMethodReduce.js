'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let result = initialValue;
    let start;

    if (arguments.length === 1) {
      start = 1;
    } else {
      start = 0;
    }

    for (let item = start; this.length > item; item++) {
      result = callback(result, this[item], item, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
