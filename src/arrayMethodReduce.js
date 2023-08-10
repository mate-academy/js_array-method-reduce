'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let init = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      init = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      init = callback(init, this[i], i, this);
    }

    return init;
  };
}

module.exports = applyCustomReduce;
