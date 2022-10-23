'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let pre = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      pre = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      pre = callback(pre, this[i], i, this);
    }

    return pre;
  };
}

module.exports = applyCustomReduce;
