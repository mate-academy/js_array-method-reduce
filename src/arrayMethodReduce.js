'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const startIndex = +!(arguments.length === 2);
    let start = startIndex ? this[0] : initialValue;

    for (let index = startIndex; index < this.length; index++) {
      start = callback(start, this[index], index, this);
    }

    return start;
  };
}

module.exports = applyCustomReduce;
