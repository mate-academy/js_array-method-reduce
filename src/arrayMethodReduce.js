'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let startArr = 0;
    let prev = initialValue;

    if (arguments.length < 2) {
      startArr = 1;
      prev = this[0];
    };

    for (let i = startArr; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
