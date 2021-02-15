'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let accamulator = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      accamulator = this[0];
      startIndex = 1;
    };

    for (let i = startIndex; i < this.length; i++) {
      accamulator = callback(accamulator, this[i], i, this);
    }

    return accamulator;
  };
}

module.exports = applyCustomReduce;
