'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let fakeI = 0;

    if (arguments.length < 2) {
      fakeI = 1;
      prev = 0;

      if (typeof this[0] === 'string') {
        prev = this[0];
      }
    }

    for (let i = fakeI; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
