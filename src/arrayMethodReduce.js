'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const checkArgsLength = arguments.length < 2;
    const startIndex = checkArgsLength
      ? 1
      : 0;

    let result = checkArgsLength
      ? this[0]
      : initialValue;

    for (let i = startIndex; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
};

module.exports = applyCustomReduce;
