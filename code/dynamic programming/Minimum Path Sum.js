/**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Subscribe to see which companies asked this question
 * @param {number[][]} grid
 * @return {number}
 思路： 也是最朴素的dp问题。
 grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j]);
 */
var minPathSum = function(grid) {
  var rows = grid.length,columns = grid[0].length;

  for(var i=1;i<rows;i++)
    grid[i][0]+=grid[i-1][0];

  for(var j=1;j<columns;j++)
    grid[0][j]+=grid[0][j-1];

  for(i=1;i<rows;i++)
    for(j=1;j<columns;j++)
      grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j]);

  return grid[rows-1][columns-1];

};