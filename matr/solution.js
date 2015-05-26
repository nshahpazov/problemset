/*********************************************
 *** Solution to flowing a character table ***
**********************************************/

(function () {
  'use strict';

  function transpose(matrix) {
    return matrix[0].map(function (col, i) {
      return matrix.map(function (row) {
        return row[i];
      });
    });
  };

  function flowList(col) {
    return col.sort(function (a, b) {
      return b === ' ' ? 1 : 0;
    });
  };

  function flowMatrix(matr) {
    var transposedResult = transpose(matr).map(function (col) {
      return flowList(col);
    });
    // transpose back to normal
    return transpose(transposedResult);
  };

  // test matrix
  var matrix = [
    ['z', 'z', 'c', ' ', '1', 'z', 'x', 'd'],
    ['y', 'y', ' ', 'z', 'd', 'a', 'x', 'x'],
    [' ', ' ', 'z', ' ', ' ', 'y', 'x', ' '],
    ['a', 'a', ' ', 'd', 'd', 'u', 'x', 'a'],
    ['d', ' ', 'a', ' ', ' ', 't', 'x', ' ']
  ];

  var result = flowMatrix(matrix);
  console.log(result);
})();