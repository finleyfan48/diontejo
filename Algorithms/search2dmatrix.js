/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the previous row.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;

    var m = matrix.length;
    var n = matrix[0].length;

    var start = 0;
    var end = m * n - 1;
    var mid = 0;
    while (start <= end) {
        mid = ~~((start + end) / 2);
        var i = ~~((mid / n));
        var j = mid - i * n;
        if (matrix[i][j] === target) return true;
        matrix[i][j] < target ? start = mid + 1 : end = mid - 1;
    }
    return false;
};