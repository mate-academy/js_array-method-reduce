'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let result = initialValue;
    let begin = 0;

    if (arguments.length < 2) {
      result = this[0];
      begin = 1;
    }

    for (let i = begin; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
};

module.exports = applyCustomReduce;
