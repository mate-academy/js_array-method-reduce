'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue = this[0]) {
    let pprev = this[0];
    let ccur;

    if (arguments.length > 1 && arguments[1] !== undefined) {
      pprev = initialValue;

      for (let i = 0; i < this.length; i++) {
        ccur = this[i];
        pprev = callback(pprev, ccur, i, this);
      }
    } else if (arguments.length > 1 && arguments[1] === undefined) {
      pprev = 'undefined';

      for (let i = 0; i < this.length; i++) {
        ccur = this[i];
        pprev = callback(pprev, ccur, i, this);
      }
    } else {
      for (let i = 1; i < this.length; i++) {
        ccur = this[i];
        pprev = callback(pprev, ccur, i, this);
      }
    }

    return pprev;
  };
}

module.exports = applyCustomReduce;
