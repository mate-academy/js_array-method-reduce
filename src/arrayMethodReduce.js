'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let summ = initialValue;

    for (let i = 0; i < this.length; i++) {
      if (summ === undefined) {
        summ = this[0];
        i++;
      }

      summ = callback(summ, this[i], i, this);
    }

    return summ;
  };
}

module.exports = applyCustomReduce;
