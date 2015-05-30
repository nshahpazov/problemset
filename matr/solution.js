module.exports = (function () {
  'use strict';

  // transpose a matrix
  function transpose(matrix) {
    return matrix[0].map(function (col, i) {
      return matrix.map(function (row) {
        return row[i];
      });
    });
  };

  // flow left-way empty strings
  function flowList(list) {
    // return list.reduce(function (accum, curr) {
      // accum[curr === ' ' ? 'unshift' : 'push'](curr);
      // return accum;
    // }, []);
    return list.sort(function (a, b) {
      return b === ' ';
    });
  };

  // export module function
  return function (matrix) {
    var transposedResult = transpose(matrix).map(function (column) {
      return flowList(column);
    });
    // transpose back to normal
    return transpose(transposedResult);
  };
})();