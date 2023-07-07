'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let reduceRes = (arguments.length > 1) ? initialValue : this[0];
    const index = (arguments.length > 1) ? 0 : 1;

    for (let i = index; i < this.length; i++) {
      reduceRes = callback(reduceRes, this[i], i, this);
    }

    return reduceRes;
  };
}

module.exports = applyCustomReduce;
