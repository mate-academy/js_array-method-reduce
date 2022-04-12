'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let init = initialValue;
    let index = 0;

    if (arguments.length < 2) {
      init = this[0];
      index = 1;
    }

    for (let i = index; i < this.length; i++) {
      init = callback(init, this[i], i, this);
    }

    return init;
  };
}

module.exports = applyCustomReduce;
