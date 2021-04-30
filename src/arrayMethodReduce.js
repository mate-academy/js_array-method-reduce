'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startIndex = 0;
    let myReduce = initialValue;

    if (arguments.length < 2) {
      myReduce = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      myReduce = callback(myReduce, this[i], i, this);
    }

    return myReduce;
  };
}

module.exports = applyCustomReduce;
