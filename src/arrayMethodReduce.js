'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...initialValue) {
    let begin = 0;
    let returnedValue = initialValue[0];

    if (initialValue[0] === undefined) {
      returnedValue = 'undefined';
    }

    if (initialValue.length === 0) {
      returnedValue = this[0];
      begin++;
    }

    for (let i = begin; i < this.length; i++) {
      returnedValue = callback(returnedValue, this[i], i, this);
    }

    return returnedValue;
  };
}

module.exports = applyCustomReduce;
