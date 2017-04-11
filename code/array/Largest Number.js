/**
 * Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {string}
 * 楼主最开始的思路是 字符串比较，对于3，30，34，如果长度不一样，补最后一个数，比如3补成33，然后用33，30，34去sort(降序)
 * 但是有testcase 没有通过： 1，824，8247     
 * 换方法， a,b比较的话，去比较他们连接后的结果 即a+b   b+a 
 * 注意几点： 
 * 1，不能连用nums.map.sort 
 * 2，return 的是数值
 * 3，注意[0,0]的情况
 * 时间复杂度nklng  
 */
var largestNumber = function(nums) {
    var parsed = nums.map(function(a){
        return a+'';
    });
    parsed.sort(compare);
    if(parsed[0]==='0') return '0'; //注意[0,0]的情况，应该只返回‘0’
    return parsed.join('')
    
    function compare(a,b){
        var left = a+b,right = b+a;
        if(left<right) return 1;
        else if(left>right) return -1;
        else return 0;
    }
};

