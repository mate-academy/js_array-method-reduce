'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prew = initialValue;
    let startIndex = 0;

    if (arguments.length < 2) {
      prew = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prew = callback(prew, this[i], i, this);
    }

    return prew;
  };
}

module.exports = applyCustomReduce;
