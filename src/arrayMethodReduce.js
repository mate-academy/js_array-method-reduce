'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accum = initialValue || 0;

    for (let i = 0; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return typeof accum === 'string' ? accum.substr(1) : accum;
  };
}

module.exports = applyCustomReduce;
