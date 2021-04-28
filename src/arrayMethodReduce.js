'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let start = 0;
    let feedBack = initialValue;

    if (arguments.length === 1) {
      start = 1;
      feedBack = this[0];
    }

    for (let i = start; i < this.length; i++) {
      feedBack = callback(feedBack, this[i], i, this);
    }

    return feedBack;
  };
}

module.exports = applyCustomReduce;
