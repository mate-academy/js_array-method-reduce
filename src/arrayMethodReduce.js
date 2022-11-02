'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    const callback = args[0];
    let initialValue = args[1];

    if (args.length === 2 && initialValue === undefined) {
      initialValue = 'undefined';
    }

    let startIndex;

    let res;

    if (initialValue !== undefined) {
      startIndex = 0;
      res = initialValue;
    } else {
      startIndex = 1;
      res = this[0];
    }

    for (let x = startIndex; x < this.length; x++) {
      res = callback(res, this[x], x, this);
    }

    return res;
  };
}

module.exports = applyCustomReduce;
