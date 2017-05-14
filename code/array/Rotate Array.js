/**
 * Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

[show hint]

Related problem: Reverse Words in a String II

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *                   1,2,3,4,5,6,7|1
 *                   2,3,4,5,6,7,1
 */
//思路1： 循环左移len-k次,时间复杂度O(n*k)
var rotate = function(nums, k) {
    var len = nums.length;
    if(k<=0) return;

    for(var i=0;i<(len-k%len);i++){     //注意这边1，取余，2，len-count
    	var prev = nums[0];
    	for(var j=0;j<len-1;j++)
    		nums[j] = nums[j+1];
    	nums[len-1] = prev;        //末尾的数
    }
};

//思路2,先整体reverse一遍，然后前k个reverse一遍，然后后len-k reverse一遍,时间复杂度O(n)
//1,2,3,4,5,6,7
//7,6,5,4,3,2,1
//4,5,6,7,1,2,3
//

//思路3，js万能的slice + concat hhh
//思路4，借助外部数组
