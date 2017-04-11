/**
 * Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 思路： 跟上一题一样，只不过不要去重，直接push就好.
 * followup： 
 * 1，如果已排序，直接merge的方法就好，
 * 2，这是什么题目= =...这两个不在一个水平线上啊...
 * 3，如果nums2在disk内的话，用hash的方法，如果都在dist内的话，各先用外部排序，然后用merge的思路
 */
var intersect = function(nums1, nums2) {
    var index = 0,result = [];

    function compare(a,b){return a-b}
    nums1.sort(compare);
    nums2.sort(compare);

    for(var i=0,j=0;i<nums1.length && j<nums2.length;){     //注意这边的i,j的边界，是&&
        var left = nums1[i],right = nums2[j];
        if(left<right) i++;
        else if(left>right) j++;
        else {
            result.push(left);
            i++;
            j++;
        }
    }
    return result;
};