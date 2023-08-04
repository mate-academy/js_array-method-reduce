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

    const thisArr = Object(this);
    const lengthArr = thisArr.length >>> 0;
    let caunt = 0;
    let value;

    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (caunt < lengthArr && !(caunt in thisArr)) {
        caunt++;
      }

      if (caunt >= lengthArr) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = thisArr[caunt++];
    }

    for (; caunt < lengthArr; caunt++) {
      if (caunt in thisArr) {
        value = callback(value, thisArr[caunt], caunt, thisArr);
      }
    }

    return value;
  };
}

module.exports = applyCustomReduce;
