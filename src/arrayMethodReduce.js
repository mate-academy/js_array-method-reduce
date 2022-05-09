'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acuum = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      acuum = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      acuum = callback(acuum, this[i], i, this);
    }

    return acuum;
  };
}

module.exports = applyCustomReduce;
