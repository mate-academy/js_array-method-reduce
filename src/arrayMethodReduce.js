'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let resultOfMethod = initialValue;

    if (initialValue === undefined) {
      if (typeof this[0] === typeof '') {
        resultOfMethod = '';
      } else if (typeof this[0] === typeof 1) {
        resultOfMethod = 0;
      }
    }

    for (let i = 0; i < this.length; i++) {
      resultOfMethod = callback(resultOfMethod, this[i], i, this);
    }
    return resultOfMethod;
  };
}

module.exports = applyCustomReduce;
