'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, props) {
    let accum = props;
    let count = 0;

    if (arguments.length === 1) {
      accum = this[0];
      count++;
    }

    for (let i = count; i < this.length; i++) {
      accum = callback(accum, this[i], i, this);
    }

    return accum;
  };
}

module.exports = applyCustomReduce;
