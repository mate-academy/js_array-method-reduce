'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(...args) {
    let result = args[1];
    let initialIndex = 0;
    const elements = [...this];

    if (args.length < 2) {
      result = elements.shift();
      initialIndex = 1;
    }

    elements.forEach((el, i) => {
      result = args[0](result, el, i + initialIndex, this);
    });

    return result;
  };
}

module.exports = applyCustomReduce;
