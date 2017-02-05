/**
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:
Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

Subscribe to see which companies asked this question
 * @param {number[][]} triangle
 * @return {number}
 思路：
 1. 最朴素的方法当然是最传统的动态规划，建立一个深复制的triangle数组，设为sumTriangle.
 然后 init,(每一行的第一个初始化为累积家和的上一行。即sumTriangle[i][0]+=sumTriangle[i-1][0])
 接着计算，sumTriangle[i][j] = triangle[i][j]+Math.min(sumTriangle[i-1][j-1],sumTriangle[i-1][j]);
 最后遍历最后一行，求解。当然这种方法比较通用。比如，可以知道某一行的最小值。可以找到path信息打印出来等等。获得的信息比较全面
 2. 第一种[][]二维数组的方法我们可以看出，其实需要的就是本行triangle数据以及上一行的[j-1]/[j]数据。那么我们就保留一个n个长度的数组
 sumArr来存储这些数据。
 sumArr[j] = triangle[i][j]+Math.min(sumArr[j-1],sumArr[j]);
 需要注意的是，
 （1）由于需要用到j-1的sumArr数据，如果从左到右的话，会 覆盖值，因此需要变换方向。
 （2）边界问题。主要是每一行的首尾。尾元素的话。因为最开始的时候sumArr初始化为POSITIVE_INFINITY.因此计算min的时候是会把它舍掉的。
 介个还是以前算sum path的一个技巧嘎嘎。而且由于第i行比第i-1行元素多。因此最后一个元素的sumArr计算就会把无穷大舍去。
 而首元素会越界，因此要提出来写。

 3. 不算思路，大概算技巧的一个...瞄结题报告看到的一种方法。划重点就是方向！从下到上...变换triangle数组...啊。居然都不要分配内存...心痛。枉宝宝还得意了一下
 得到bonus point了= =
public:
int minimumTotal (vector<vector<int>>& triangle) {
  for (int i = triangle.size() - 2; i >= 0; --i)
    for (int j = 0; j < i + 1; ++j)
      triangle[i][j] += min(triangle[i + 1][j],triangle[i + 1][j + 1]);
      return triangle [0][0];
  }
};
 */
var minimumTotal = function(triangle) {

  if(!triangle.length) return 0;

  var sumArr = new Array(triangle.length);

  //init
  sumArr[0] = triangle[0][0];
  for(var i=1;i<triangle.length;i++) sumArr[i] = Number.POSITIVE_INFINITY;

  for(i=1;i<triangle.length;i++){

    //每行第一个没有左侧数字

    for(var j = triangle[i].length-1;j>=0;j--){
    //从左往右的话会覆盖，应该从右往左计算
      if(j===0) sumArr[j] += triangle[i][j];
      else
        sumArr[j] = triangle[i][j]+Math.min(sumArr[j-1],sumArr[j]);
    }

  }

  return Math.min.apply(null,sumArr);


};