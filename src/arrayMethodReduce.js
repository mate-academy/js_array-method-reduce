'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acum = 0;

    if (initialValue !== undefined) {
      acum = initialValue;
    } else {
      acum = this[0];
    }

    let i = initialValue !== undefined ? 0 : 1;

    for (; i < this.length; i++) {
      acum = callback(acum, this[i], i, this);
    };

    return acum;
  };
}

module.exports = applyCustomReduce;
