'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    // write code here
    let acum = typeof this[0] === 'number' ? 0 : initialValue;

    for (let index = 0; index < this.length; index++) {
      acum = callback(acum, this[index], index, this);
    }

    return acum;
  };
}

module.exports = applyCustomReduce;
