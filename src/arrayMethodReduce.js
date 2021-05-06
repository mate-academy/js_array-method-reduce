'use strict';

/**
 * Implement method Reduce
 */

//  let's assign default values to startIndex and only
// if their is no initialValue reassign them
//  no need for if else here
//  also there should be only ONE for-loop

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let prev = initialValue;
    let startIndex = 0;

    if (typeof prev === 'undefined') {
      prev = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      prev = callback(prev, this[i], i, this);
    }

    return prev;
  };
}

module.exports = applyCustomReduce;
