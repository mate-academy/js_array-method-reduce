'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initCopy = initialValue;

    let start = 0;

    if (arguments.length < 2) {
      initCopy = this[0];
      start = 1;
    }

    for (let i = start; i < this.length; i++) {
      initCopy = callback(initCopy, this[i], i, this);
    }

    return initCopy;
  };
};

module.exports = applyCustomReduce;
