'use strict';

/**
 * Implement method Reduce
 */

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accValue;

    if (initialValue === undefined) {
      accValue = (typeof this[0] === 'string') ? '' : 0;
    } else {
      accValue = initialValue;
    }

    for (let i = 0; i < this.length; i++) {
      accValue = callback(accValue, this[i], i, this);
    }

    return accValue;
  };
}

module.exports = applyCustomReduce;
