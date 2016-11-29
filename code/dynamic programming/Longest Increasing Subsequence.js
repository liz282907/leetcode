/**
 * @param {number[]} nums
 * @return {number}
 Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
思路：
wrong!
最朴素的思路大概就是对每一个元素。从自己开始向两边遍历。左边遇到比自己小的那么就添加到自己的数组。然后最后全局遍历看谁的长度最大。O(n^2)的复杂度。

correct:
也可以用动态规划。对每一个元素i,令j 在0到i-1之间遍历。找到那些比nums[i]小的元素。j.f[i] = Math.max(f[i], f[j] + 1);

思路二：
看了下时间复杂度的follow up。应该是遍历的基础上增加一个二分查找。那么应该可以这么考虑。
在遍历的时候，假设每个元素都维持自己的一个subsequence：arr[i],
那么arr[i]应该是在arr[i-1]的基础上比较。因为arr[i-1]是一个递增序列。可以二分从中找到第一个比它小的元素。插入，作为自己的
arr[i].

其实...这种思路是不对的，楼主在submit后发现test case没有通过。[1,3,6,7,9,4,10,5,6]。仔细一想，发现不太对..
但二分+遍历的大方向还是对的。只能在此基础上修改。
 */
 /* wrong
var lengthOfLIS = function(nums) {

    if(!nums.length) return 0;

    var LISArr = [[nums[0]]];
    var maxArr = [nums[0]];
    var maxLength = 1;
    for(var i=1;i<nums.length;i++){

        var prevArr = LISArr[i-1];

        if(nums[i]<prevArr[0])
            LISArr[i] = [nums[i]]
        else{
            LISArr[i] = bisectInsert(maxArr,nums[i]);
        }
        if(LISArr[i].length>maxArr.length) maxArr = LISArr;
        // maxLength = Math.max(maxLength,LISArr[i].length);

    }
    return maxLength;

    function bisectInsert(arr,val){
        var i=0,j = arr.length;
        while(i<j){
            mid = Math.floor((i+j)/2);
            if(arr[mid]<val) i = mid+1;
            else j = mid;
        }

        // while(arr[i]===val) i++;//如果有重复元素，找到第一个大于它的。插入。
        return arr.slice(0,i).concat(val);
    }

};
*/

//accepted。总结来说是  遍历基础上二分插入排序找前面的个数。
var lengthOfLIS = function(nums) {

    var increasingArr = [];
    var maxLength = 0;
    for(var i=0;i<nums.length;i++){
        var insertIndex = bisectInsert(increasingArr,nums[i]);
        increasingArr[insertIndex] = nums[i];
        maxLength = Math.max(maxLength,insertIndex+1);//插入的位置即表示前面有多少个递增的数，即为到当前nums[i]为止的incresing num;
    }
    return maxLength;

    function bisectInsert(arr,val){
        var i=0,j = arr.length;
        while(i<j){
            mid = Math.floor((i+j)/2);
            if(arr[mid]<val) i = mid+1;
            else j = mid;
        }

        return i;
    }

};