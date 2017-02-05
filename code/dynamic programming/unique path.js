/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Subscribe to see which companies asked this question
 * @param {number} m
 * @param {number} n
 * @return {number}
 思路： 最普通的动态规划题目。入门级别。用二维数组可以实现。
 */
var uniquePaths = function(m, n) {

  var result = initArr(m,n);
  for(var i=1;i<m;i++)
    for(var j=1;j<n;j++)
      result[i][j] = result[i][j-1]+result[i-1][j];

  return result[m-1][n-1];


  function initArr(m,n){
    var result = new Array(m);
    for(var i=0;i<m;i++){
      result[i] = [];
      result[i][0] = 1;
    }
    for(i=1;i<n;i++) result[0][i] = 1;
    return result;
  }

};


var uniquePaths = function(m, n) {

  var curLine = [];
  //初始化
  var initPoint = 1;//左上角的1，初始化
  for(var j=0;j<n;j++) curLine[j] = 1;  //第一行

  for(var i=1;i<m;i++)
    for(j=1;j<n;j++)
      curLine[j]+=curLine[j-1];    //curLine[j]代表上方值，curLine[j-1]代表左方值；

  return curLine[n-1];

};