'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startElem = initialValue;
    let i = 0;

    if (arguments.length < 2) {
      startElem = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      startElem = callback(startElem, this[i], i, this);
    }

    return startElem;
  };
}

module.exports = applyCustomReduce;
