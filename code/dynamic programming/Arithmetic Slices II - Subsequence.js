/**
 * A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. A subsequence slice of that array is any sequence of integers (P0, P1, ..., Pk) such that 0 ≤ P0 < P1 < ... < Pk < N.

A subsequence slice (P0, P1, ..., Pk) of array A is called arithmetic if the sequence A[P0], A[P1], ..., A[Pk-1], A[Pk] is arithmetic. In particular, this means that k ≥ 2.

The function should return the number of arithmetic subsequence slices in the array A.

The input contains N integers. Every integer is in the range of -231 and 231-1 and 0 ≤ N ≤ 1000. The output is guaranteed to be less than 231-1.


Example:

Input: [2, 4, 6, 8, 10]

Output: 7

Explanation:
All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]
Subscribe to see which companies asked this question.
 */

/**
 * 好像理解错题目意思了。。以为最开始的处理就要是连续的sequence才可以，比如【1，1，2，3】，有两个等差数列。但是楼主的计算中认为第一个1跟后面的2，3是不可以的。。
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {

	return calSlices(A)
    function calSlices(A) {
        if (A.length < 3) return 0;

        var count = 0;
        var result = [],
            lastSolution = [],
            lastGap = 0; //注意初始值的设置

        for (var i = 0; i < A.length; i++) {
            lastSolution.push(A[i]);
            var tempGap;
            if (i === A.length - 1) tempGap = -A[i];
            else tempGap = A[i + 1] - A[i], len = 0;

            if (tempGap === lastGap) continue;
            if ((len = lastSolution.length) >= 3) {
            	console.log(lastSolution)
                // result.push([].concat(lastSolution));
                count += calCount(len)
            }
            lastSolution = [A[i]];
            lastGap = tempGap;
        }
        return count;
    }
    function calCount(len){
        var result = 0,delta = 1;
        for(var gap = 2; gap<= len-1; gap+= delta){
            for(var index = 0;index<gap;index++){
                var count = 0,innerIndex = index;
                while(innerIndex<=len-1) {
                    count++;
                    innerIndex+=gap;
                }
                if(count>=3) result += (count-2) * (count-1)/2;
            }
        }
        result += (len-2)*(len-1)/2
        return result;
    }
};
