'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultOfReduce = initialValue;
    let firstIndex = 0;

    if (initialValue === undefined) {
      resultOfReduce = this[0];
      firstIndex = 1;
    }

    for (let i = firstIndex; i < this.length; i++) {
      resultOfReduce = callback(resultOfReduce, this[i], i, this);
    }

    return resultOfReduce;
  };
}

module.exports = applyCustomReduce;
