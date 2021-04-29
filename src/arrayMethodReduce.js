'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let summary = initialValue;
    let i = 0;

    if (initialValue === undefined) {
      summary = this[i];
      i = 1;
    }

    for (; i < this.length; i++) {
      summary = callback(summary, this[i], i, this);
    }

    return summary;
  };
}

module.exports = applyCustomReduce;
