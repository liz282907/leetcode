/**
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.

Subscribe to see which companies asked this question
 * @param {number[][]} obstacleGrid
 * @return {number}
 思路： 在unique path的基础上改变。如果遇到障碍物，置当前位置的sum为0;
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var curLine = obstacleGrid[0][0]===1?[0]:[1];
    var rows = obstacleGrid.length,columns = obstacleGrid[0].length;
  //初始化
  var initPoint = 1;//左上角的1，初始化
  for(var j=1;j<columns;j++) curLine[j] = 0;
   //第一行初始化
  for(var i=0;i<rows;i++){
    if(obstacleGrid[i][0]===1) curLine[0] = 0; //每一行的首位，需要判断是否是障碍物。
    for(j=1;j<columns;j++){
      if(obstacleGrid[i][j]===1) curLine[j] = 0;
      else curLine[j] += curLine[j-1];    //curLine[j]代表上方值，curLine[j-1]代表左方值；
    }
  }

  return curLine[columns-1];
};