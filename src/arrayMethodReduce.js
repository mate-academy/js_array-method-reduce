'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accu = arguments.length <= 1 ? this[0] : initialValue;
    const startIndex = arguments.length <= 1 ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
      accu = callback(accu, this[i], i, this);
    }

    return accu;
  };
}

module.exports = applyCustomReduce;
