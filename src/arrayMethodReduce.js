'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultReduce = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      resultReduce = this[0];
      index = 1;
    }

    while (index < this.length) {
      resultReduce = callback(resultReduce, this[index], index, this);
      index++;
    }

    return resultReduce;
  };
}

module.exports = applyCustomReduce;
