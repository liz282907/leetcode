/**
 * A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {number[]} A
 * @return {number}
 * 思路： 算最长gap值相同的数组，思路：动态规划
 * 对于当前值，有两个选择，一个是发现gap不变，那么push进去就好，另一个是发现不同，那么就要新创建solution数组：
 *      以1, 1, 2, 5, 7为例
 *              | 
 *     之前的gap为0，到2的时候，发现gap为3了（5-2）.那么就要对之前的solution数组进行判断（注意首先要push进去，因为是往后看的，当前一定在solution内）。
 *     如果超过3，那么计算，不超过，舍弃。生成新的solution数组。
 * 然后每得到一个数组后，要得到里面slice的个数，只要 计算 n-2+ n-3+...+1 = (n-2)*(n-1)/2 即可。即选3个的个数，选4个的个数。。以此类推
 * 有点像consective sum还是哪一题来着
 *
 */
var numberOfArithmeticSlices = function(A) {
	if(A.length<3) return 0;

    var count = 0;
    var result = [],lastSolution = [],lastGap = 0;  //注意初始值的设置

    for(var i=0;i<A.length;i++){
        lastSolution.push(A[i]);
        var tempGap;
        if(i===A.length-1) tempGap = -A[i];
        else tempGap = A[i+1]-A[i],len = 0;

        if(tempGap===lastGap) continue;

        if((len = lastSolution.length)>=3) {
            // result.push([].concat(lastSolution));
            count += (len-2)*(len-1)/2;
        }

        lastSolution = [A[i]];
        lastGap = tempGap;
    }
    return count;
};