/**
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.

Subscribe to see which companies asked this question
 * @param {string} s
 * @return {number}
 思路跟climbing stairs差不多。nums[i] 由nums[i-2],nums[i-1]联合决定
 */
var numDecodings = function(s) {
    var dict = {};
    for(var i=1;i<=26;i++){
        dict[i] = true;
    }
    if(!s) return 0;

    var nums = [];
    nums[0] = s[0]==='0'?0:1;

    for(i=1;i<s.length;i++){
        nums[i] = 0;
        if(dict[s.substr(i-1,2)]){
            if(i<2) nums[i] += 1;
            else nums[i] += nums[i-2];
        }
        if(s[i]!=='0') nums[i] += nums[i-1];
    }
    return nums[s.length-1];
};
