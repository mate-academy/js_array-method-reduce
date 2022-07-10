'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let w = initialValue;
    this.forEach(function(el, i, thisArr) {
      if (w === undefined) {
        if (typeof el === 'string') {
          w = '';
        } else {
          w = 0;
        }
      }
      w = callback(w, el, i, thisArr);
    });
    return w;
  };
}

module.exports = applyCustomReduce;
