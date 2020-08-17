'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (!initialValue) {
      let accum;

      typeof callback(accum, this[0], 0, this) === 'number'
        ? accum = 0
        : accum = '';

      for (let i = 0; i < this.length; i++) {
        accum = callback(accum, this[i], i, this);
      }

      return accum;
    } else {
      let accum = initialValue;

      for (let i = 1; i < this.length; i++) {
        accum = callback(accum, this[i], i, this);
      }

      return accum;
    }
  };
}

module.exports = applyCustomReduce;
