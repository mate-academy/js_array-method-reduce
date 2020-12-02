'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    if (this === null) {
      throw new TypeError('reduce2 called on null or undefined.'
        + 'Method reduce2 must be called on an array object.');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    let firstValue = initialValue || (isNaN(this[0]) ? '' : 0);

    if (initialValue === 0) {
      firstValue = 0;
    }

    let acumulated = firstValue;

    for (let i = 0; i < this.length; i++) {
      acumulated = callback(acumulated, this[i], i, this);
    }

    return acumulated;
  };
}

module.exports = applyCustomReduce;
