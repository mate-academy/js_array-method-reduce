'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, ...args) {
    if (args.length > 0) {
      let result1 = args[0];

      for (let ind = 0; ind < this.length; ind++) {
        result1 = callback(result1, this[ind], ind, this);
      };

      return result1;
    }

    let result2 = this[0];

    for (let ind = 1; ind < this.length; ind++) {
      result2 = callback(result2, this[ind], ind, this);
    };

    return result2;
  };
};

module.exports = applyCustomReduce;
