'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let endValue = initialValue;

    if (initialValue === undefined) {
      endValue = typeof (this[0]) === 'string' ? '' : 0;
    }

    for (let i = 0; i < this.length; i++) {
      endValue = callback(endValue, this[i], i, this);
    }

    return endValue;
  };
}

module.exports = applyCustomReduce;
