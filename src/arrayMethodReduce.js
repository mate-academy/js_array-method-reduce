'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    const argLength = arguments.length;
    let res = argLength >= 2 ? initialValue : this[0];
    const start = argLength >= 2 ? 0 : 1;

    for (let i = start; i < this.length; i++) {
      res = callback(res, this[i], i, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
