'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let initValue = initialValue;
    let i = 0;

    if (initialValue === undefined) {
      initValue = this[0];
      i = 1;
    }

    for (i; i < this.length; i++) {
      callback(initValue, this[i], i, this);
      initValue = callback(initValue, this[i], i, this);
    };

    return initValue;
  };
}

module.exports = applyCustomReduce;
