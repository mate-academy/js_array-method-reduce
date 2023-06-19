'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    console.log('test);
  };
}

module.exports = applyCustomReduce;
