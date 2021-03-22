'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = 0) {
    let result = initialValue;
    const temp = initialValue;

    if (this.some(el => typeof callback(temp, el) === 'string')) {
      result = '';
    }

    for (let i = 0; i < this.length; i++) {
      result = callback(result, this[i], i, this);
    }

    return result;
  };
}

module.exports = applyCustomReduce;
