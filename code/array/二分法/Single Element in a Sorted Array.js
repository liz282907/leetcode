/**
 * Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.

Subscribe to see which companies asked this question.
1,1,3,3,4,5,5,8,8
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路： 二分法，找mid,如果mid所在位置是奇数的话，那么应该看它的右边，是否是一样的，一样说明前面都是成对出现的。那么应该在mid+1后面找
 * 如果不一样，说明前面有不匹配的，多出来一个，应该在前面找。
 * 如果mid所在位置是偶数，那么看它左边。
 */
var singleNonDuplicate = function(nums) {
    
    var left = 0,right = nums.length-1;
    while(left<right){
    	var mid = Math.floor((left+right)/2);
    	var pairValue;
    	if(mid&1) pairValue = nums[mid-1];
    	else pairValue = nums[mid+1];

    	if(nums[mid]!==pairValue) right = mid;
    	else left = mid+1;       //注意
    }
    return nums[left];
};