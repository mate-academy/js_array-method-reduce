'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const t = Object(this);
    const len = t.length >>> 0;
    let k = 0;
    let value;

    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }

      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }

    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }

    return value;
  };
}

module.exports = applyCustomReduce;
