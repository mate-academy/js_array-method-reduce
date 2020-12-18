'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acc;
    let loopStart = 0;

    if (initialValue !== undefined) {
      acc = initialValue;
    } else {
      acc = this[0];
      loopStart++;
    }

    for (let i = loopStart; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }

    return acc;
  };
}

module.exports = applyCustomReduce;
