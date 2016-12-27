/**
 * Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 * @param {number[]} nums
 * @return {number}
 * 注意点1：
 * js中Number按64位存储，整数（否则会损失精度）最大是按54位计算最大最小数的。
 * 数组索引跟位操作是按照32位处理的。
 * 注意点2：
 * 思路：32位，每一位看有多少个1，遍历完所有的nums[i]以后，对sum mod3.把那些
 * 出现三次的给抹掉。剩余的就是真正出现的数。取某一位用nums[j]>>i来计算。
 */
var singleNumber = function(nums) {
    var result = 0;
    for(var i=0;i<32;i++){
        var sum = 0;
        for(var j=0;j<nums.length;j++){
            sum += (1 & nums[j]>>i);
        }
        sum %= 3;
        result += sum* (1<<i);
    }
    return result;
};
//还看到一种方法，是先O(lgn)排序，然后对每一个nums[i]，看左右是否有三个相同的，如果有则pass。没有的话说明就是
//要找的