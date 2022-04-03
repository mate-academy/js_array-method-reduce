'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let pre = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      pre = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      pre = callback(pre, this[i], i, this);
    }

    return pre;
  };
}

module.exports = applyCustomReduce;
