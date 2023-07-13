'use strict';

function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let acum = initialValue;

    if (arguments.length === 1) {
      acum = this[0];

      for (let i = 1; i < this.length; i++) {
        acum = callback(acum, this[i], i, this);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        acum = callback(acum, this[i], i, this);
      }
    }

    return acum;
  };
}

module.exports = applyCustomReduce;
