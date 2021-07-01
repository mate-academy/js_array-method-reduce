'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let collect = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      collect = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      collect = callback(collect, this[i], i, this);
    }

    return collect;
  };
}

module.exports = applyCustomReduce;
