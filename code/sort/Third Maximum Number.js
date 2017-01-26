/**
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
Subscribe to see which companies asked this question
思路： 最开始想用bucket排序，但是遇到了负数，在object里面并不是按照增长的次序来排列的。不可行
就换最naive的方法，手动找max,second,third. 每次cur都去进行判断，是否要更新当前的三个数。有一点需要
注意的是，因为重复的不考虑，因此在if判断中需要把==给pass掉。
 */
/**
 * @param {number[]} nums
 * @return {number}
 * max second third
 *    |      |
 */
var thirdMax = function(nums) {

    var max,second,third;
    max = second = third = Number.NEGATIVE_INFINITY;
    for(var i=0;i<nums.length;i++){
        var cur = nums[i];
        if(cur>max) {
            third = second;
            second = max;
            max = cur;
        }else if(cur< max &&cur>second){//一定要加上cur<max这个判断，否则遇到与max相同的会去更新second。
            third = second;
            second = cur;
        }else if(cur< second && cur>third) third = cur;
    }
    if(third===Number.NEGATIVE_INFINITY) return max;
    return third;
};

/**
 * [bucket description]
 * @type {Object} 不可行的bucket
 * var bucket = {};
    for(var i=0;i<nums.length;i++){
        var cur = nums[i];
        bucket[cur] = bucket[cur]? bucket[cur]+1: 1;
    }
    console.log
    var arr = Object.keys(bucket).map(function(v){return parseInt(v)});
    if(nums.length<3) return parseInt(arr.slice(-1));
    else return parseInt(arr[nums.length-3]);
 */
