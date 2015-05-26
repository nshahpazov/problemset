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
    // maybe use a priority queue?
    return list.sort(function (a, b) {
      return b === ' ' ? 1 : 0;
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