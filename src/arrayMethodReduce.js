'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultReduce = initialValue;
    let currentIndex = 0;

    if (initialValue === undefined) {
      currentIndex = 1;
      resultReduce = this[0];
    }

    for (let i = currentIndex; i < this.length; i++) {
      resultReduce = callback(resultReduce, this[i], i, this);
    }

    return resultReduce;
  };
}

module.exports = applyCustomReduce;
