'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    const t = Object(this);
    const len = t.length;
    let k = 0;
    let value;

    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      value = t[k++];
    }

    for (k; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }

    return value;
  };
};

module.exports = applyCustomReduce;
