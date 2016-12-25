/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 * @param {string} s
 * @return {number}
 思路： dp问题，每个char维持一个数组，存放自己的最长无重复子串。
 对s[i]来说，遍历lastArr[i-1]数组，如果发现都没有，那么s[i]的lastArr[i] = lastArr[i]+s[i]
即 pwwkew
    |->s[i]  lastArr[i-1] = ['p'] 无重复，所以 lastArr[i] = ['p','w']
如果发现有重复，
    pwwkew
      |->s[i] lastArr[i-1] = ['p','w'] 发现index=1找到重复，所以lastArr[i]应该从i+1开始. [] +s[i]
 */
var lengthOfLongestSubstring = function(s) {

    var lengthOfLongest = 0,
        lastArr = [];
    for(var i=0;i<s.length;i++){
        for(var j=0;j<lastArr.length;j++){
            if(s[i]===lastArr[j]){
                lastArr = lastArr.slice(j+1);
                break;
            }
        }
        lastArr.push(s[i]);
        lengthOfLongest = Math.max(lengthOfLongest,lastArr.length);
    }
    return lengthOfLongest;

};
//思路二： two pointer i为end j为
//上面的复杂度还是有点高的，两重循环。其实知道length，即维持two pointer，i-j+1就是长度。
//当当前s[i]在dict中，设为lastDup，又分两种情况，一种是lastDup在j左边，那么不变，一种是在j右边，那么移动左边的pointer（j）到lastDip+1

var lengthOfLongestSubstring = function(s) {

    var dict = {},
        max = 0,j=0;

    for(var i=0;i<s.length;i++){
        if((dict[s[i]]!==undefined))     //不能直接用!dict，因为index可能为0
            j = Math.max(j,dict[s[i]]+1);   //j左侧或右侧，所以要比较下

        max = Math.max(max,i-j+1);
        dict[s[i]] = i;

    }
    return max;

};