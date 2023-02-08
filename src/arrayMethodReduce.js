'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let init = initialValue;
    let start = 0;

    if (arguments.length < 2) {
      init = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      init = callback(init, this[i], i, this);
    }

    return init;
  };
}

module.exports = applyCustomReduce;
