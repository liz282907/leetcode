/**
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 * @param {number[]} nums
 * @return {number[]}
 * 这两个数肯定至少有一位是不同的，那么我们就要找出这一位，在整个异或完以后肯定至少有一位是为1的，diff&-diff就可以做到这一步。
 然后借助这一位，把3,5区分到两个group中。每个group里面都是 两个相同的，1个unique。又可以用singlenumber1
 的方法了
 a&-a是把从右到左第一个为1的
  6   = 0110
 -6   = 1010
 6&-6 = 0010
 注意点2： 异或的初始值可以设为0，因为0^0 = 0,0^1 = 1。
 注意点3： 注意符号的优先级！！ cur & diff ===0 是会先运行后面的，所以要加括号
 */
var singleNumber = function(nums) {

    var diff = 0,result = [0,0];
    for(var i=0;i<nums.length;i++){
        diff ^= nums[i];
    }
    diff &= -diff;
    for(i=0;i<nums.length;i++){
        var cur = nums[i];
        if((cur & diff) ===0) result[0] ^= cur;  //别忘了括号
        else result[1] ^= cur;
    }
    return result;
};