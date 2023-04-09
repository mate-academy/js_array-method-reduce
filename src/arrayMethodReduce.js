'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let resultReduce = initialValue;

    if (arguments.length < 2) {
      resultReduce = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      resultReduce = callback(resultReduce, this[i], i, this);
    }

    return resultReduce;
  };
}

module.exports = applyCustomReduce;
