/**
Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 * @param {number} n
 * @return {number}
 思路，siguoyi...见讲解。动态规划
 */
var numTrees = function(n) {
    var sum = [];
    function num(n){
        if(n===0 || n===1) {
          sum[n]=1;
        }
        else{
          sum[n] = 0;
          for(var i=0;i<n;i++)  {
              var left = sum[i]?sum[i]: num(i);
              var right = sum[n-1-i]?sum[n-1-i]: num(n-1-i);
              sum[n] += left*right;
          }
        }

        return sum[n];
    }

    return num(n);

};